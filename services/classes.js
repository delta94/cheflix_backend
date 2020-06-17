const db = require('../models');

const findAll = (query) => {
    return db.Class.findAll({
        where: {
            ...query
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