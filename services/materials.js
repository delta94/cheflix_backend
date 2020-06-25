const db = require('../models');
const { Op } = db;

const findOne = (query) => {
    return db.MaterialInClass.findOne({
        where: {
            ...query,
        }
    });
}

const create = ({ classId, name, link }) => {
    return db.MaterialInClass.create({
        classId, name, link
    });
}

module.exports = {
    create,
    findOne
}