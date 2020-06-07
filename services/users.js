const db = require('../models');

const findOne = (query) => {
    return db.User.findOne({
        attributes: {
            exclude: ['password']
        },
        where: {
            ...query
        }
    });
}

const create = (data) => {
    return db.User.create({
        ...data
    });
}

module.exports = {
    findOne,
    create
}