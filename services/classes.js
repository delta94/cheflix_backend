const db = require('../models');
const { Op } = db;
const { query } = require('express');

const findAll = (query) => {
    return db.Class.findAll({
        where: {
            ...query
        },
        include: [
            {
                model: db.User,
                as: 'students',
                attributes: {
                    exclude: ['password']
                }
            },
            {
                model: db.User,
                as: 'teacher',
                attributes: {
                    exclude: ['password']
                }
            },
        ]
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

const findEnrolled = async ({ id }) => {
    let student = await db.User.findOne({
        where: {
            id
        },
        include: {
            model: db.Class,
            as: 'enrolledClasses',
            include: [
                {
                    model: db.User,
                    as: 'students',
                    attributes: {
                        exclude: ['password']
                    }
                },
                {
                    model: db.User,
                    as: 'teacher',
                    attributes: {
                        exclude: ['password']
                    }
                },
            ]
        }
    });
    return student.enrolledClasses;
}

const findByKeyword = async ({ keyword }) => {
    return db.Class.findAll({
        where: {
            name: {
                [Op.like]:`%${keyword}%`
            }
        }
    });
}

module.exports = {
    findAll,
    create,
    enroll,
    findEnrolled,
    findByKeyword
}