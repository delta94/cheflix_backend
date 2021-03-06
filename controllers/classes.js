const { classService } = require('../services');
const { definedError } = require('../utils');
const { MissingParameter } = require('../utils/error');

const getClasses = async (req, res, next) => {
    try {
        var { type, keyword } = req.query;
        var classes;
        switch(type) {
            case 'opened': {
                classes = await classService.findAll({ teacherId: req.user.id });
                break;
            }
            case 'enrolled': {
                classes = await classService.findEnrolled({ id: req.user.id});
                break;
            }
            case 'suggested': {
                classes = await classService.findSuggested();
                break;
            }
            default : {
                classes = await classService.findByKeyword({ keyword });
            }
        }

        return res.json({
            status: 'success',
            data: {
                classes
            }
        });
    } catch (e) {
        next(e);
    }
}

const createClass = async (req, res, next) => {
    try {
        var { name, description, teacherId } = req.body;

        if (!name || !description || !teacherId) {
            throw new definedError.MissingParameter('Some parameter is missing');
        }

        let newClass = await classService.create({ name, description, teacherId });

        return res.json({
            status: 'success',
            message: 'create class successful',
            class: newClass
        });

    } catch (e) {
        next(e);
    }
}

const updateClass = async (req, res, next) => {
    try {
        var { id } = req.params;
        var { name, description, picture } = req.body;
        let classItem = await classService.findOne({ id });
        // if no user then throw error
        if(!classItem) throw new definedError.NotFound('Class not found');
        // set changes
        classItem.name = name;
        classItem.description = description;
        classItem.picture = picture;

        // save changes
        await classItem.save();
        return res.json({
            status: 'success',
            message: 'Class updated'
        });
    } catch (e) {
        next(e);
    }
}

const enrollClass = async (req, res, next) => {
    try {
        var { id: studentId } = req.user;
        var { classId } = req.body;

        await classService.enroll({ studentId, classId });
        
        return res.json({
            status: 'success',
            message: 'enroll class successful',
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getClasses,
    createClass,
    enrollClass,
    updateClass
}