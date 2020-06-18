const { classService } = require('../services');
const { definedError } = require('../utils');
const { MissingParameter } = require('../utils/error');
const classes = require('../services/class');

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
        console.log({className, desc, lessons})

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
            
const updateClass = async (req, res, next) => {
    try {
        let { id } = req.params;
        const {className, desc, lessons} = req.body;
        console.log({className, desc, lessons}) 

        let classes = await classService.findOne({ id });
        // if no user then throw error
        if(!classes) throw new definedError.NotFound('User not found');
        // set changes

        // save changes
        await classes.save();
        return res.json({
            status: 'success',
            message: 'Class updated'
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    getClasses,
    createClass,
    enrollClass
    updateClass
}