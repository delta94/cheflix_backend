const db = require('../models');

const {
    bcrypt
} = require('../utils');

const findOne = (query) => {
    // console.log(query);
    return db.User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            ...query,
            deletedAt: null
        },
        include: {
            model: db.Class,
            as: 'enrolledClasses',
            include: {
                model: db.User,
                as: 'students'
            }
        }
    });
}

const findAll = (query) =>{
    console.log(query);
    return db.User.findAll({
        raw: true,
        attributes: {
            exclude: ['password']
        },
        where: {
            ...query,
            deletedAt: null
        },
        include: {
            model: db.Class,
            as: 'enrolledClasses',
            include: {
                model: db.User,
                as: 'students'
            }
        }
    });
}


const create =  async (data) => {
    console.log('called create with data: ', data)
    // generate hash for password
    let password = await bcrypt.genHash(data.password);
    // delete plain password
    delete data.password;
    console.log('creating');
    return db.User.create({
        ...data,
        password
    });
}

const destroy = async (data)=>{
    console.log(data)
    return db.User.destroy({
        where:{...data},
        truncate: true
    })
}

const comparePassword = async ({ id, password }) => {
    let user = await db.User.findOne({
        attributes: ['password'],
        where: {
            id
        }
    });

    return bcrypt.compareHash(password, user.password);
}

module.exports = {
    findOne,
    create,
    findAll,
    destroy,
    comparePassword
}