const db = require('../models');

const {
    bcrypt
} = require('../utils');

const findOne = (query) => {
    console.log(query);
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

const create =  async (data) => {
    return db.User.create({
        ...data,
    });
}

module.exports = {
    findOne,
    create,
}