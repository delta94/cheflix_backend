const db = require('../models');

const {
    bcrypt
} = require('../utils');

const findOne = (query) => {
    console.log(query);
    return db.class.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            ...query,
            deletedAt: null
        },
        include: {
            model: db.Class
        }
    });
}

const create =  async (data) => {
    // generate hash for password
    let password = await bcrypt.genHash(data.password);
    // delete plain password
    delete data.password;

    return db.User.create({
        ...data,
        password
    });
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
    comparePassword
}