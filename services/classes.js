const db = require('../models');

const findAll = (query) => {
    return db.Class.findAll({
        where: {
            ...query
        },
        include: {
            model: db.User,
            as: 'students'
        }
    });
};

const create = (data) => {
    return db.Class.create({
        ...data
    });
}

module.exports = {
    findAll,
    create
}