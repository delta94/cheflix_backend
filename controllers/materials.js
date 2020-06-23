const { materialService } = require('../services');
const { definedError } = require('../utils');

const createMaterial = async (req, res, next) => {
    try {
        var { classId, name, link } = req.body;
        var material = await materialService.create({ classId, name, link });
        return res.json({
            status: 'success',
            message: 'Material created',
            data: {
                material
            }
        })
    } catch (e) {
        next(e);
    }
}

const updateMaterial = async (req, res, next) => {
    try {
        var { id, name, link } = req.body;
        var material = await materialService.findOne({ id });

        material.name = name;
        material.link = link;

        await material.save();

        return res.json({
            status: 'success',
            message: 'Material updated'
        });
    } catch (e) {
        next(e);
    }
}

module.exports = {
    createMaterial,
    updateMaterial
}