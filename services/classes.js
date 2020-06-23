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

const createLesson = (data, parrentClassId) => {
    console.log('material', data, parrentClassId)
    
    return db.MaterialInClass.create({
        name: data.name,
        des: data.desc,
        link: data.vid,
        classId:parrentClassId,
    });
}

const create = (data) => {
    console.log('data', data)


    var newClass = db.Class.create({
        ...data
    }).then(function(classes){
        console.log('created data id',classes.dataValues.id)
        data.lessons.forEach((les)=>{
            createLesson(les, classes.dataValues.id)
        })
    });

    return newClass
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