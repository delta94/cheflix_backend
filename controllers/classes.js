const { classService } = require('../services');
const { definedError } = require('../utils');
const { MissingParameter } = require('../utils/error');

const getClasses = async (req, res, next) => {
    try {
        var { type } = req.query;
        var classes;
        switch(type) {
            case 'opened': {
                classes = await classService.findAll({ teacherId: req.user.id });
                break;
            }
            case 'enrolled': {
                break;
            }
            default : {
                classes = await classService.findAll();
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

module.exports = {
    getClasses,
    createClass
}