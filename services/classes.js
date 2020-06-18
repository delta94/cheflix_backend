const db = require('../models');
const { query } = require('express');

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

const enroll = ({ studentId, classId }) => {
    return db.StudentInClass.create({
        studentId,
        classId
    });
}

module.exports = {
    findAll,
    create,
    enroll
}