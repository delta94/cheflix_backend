const db = require('../models');
const { Op } = db;

const findOne = (query) => {
    return db.Class.findOne({
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
            {
                model: db.MaterialInClass,
                as: 'materials'
            }
        ]
    });
};

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
            {
                model: db.MaterialInClass,
                as: 'materials'
            }
        ],
        order: [['createdAt', 'DESC']]
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
                {
                    model: db.MaterialInClass,
                    as: 'materials'
                }
            ],
            order: [['createdAt', 'DESC']]
        }
    });
    return student.enrolledClasses;
}

const findByKeyword = async ({ keyword }) => {
    return db.Class.findAll({
        where: {
            name: {
                [Op.like]: `%${keyword}%`
            }
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
            {
                model: db.MaterialInClass,
                as: 'materials'
            }
        ],
        order: [['createdAt', 'DESC']]
    });
}

const findSuggested = async () => {
    return db.Class.findAll({
        limit: 5,
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
            {
                model: db.MaterialInClass,
                as: 'materials'
            }
        ],
        order: [['createdAt', 'DESC']]
    });
}

module.exports = {
    findOne,
    findAll,
    create,
    enroll,
    findEnrolled,
    findByKeyword,
    findSuggested
}