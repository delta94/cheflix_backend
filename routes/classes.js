const express = require('express');
const classRouter = express.Router();

// database service
const { classService } = require('../services');
// controllers
const { classController } = require('../controllers');
// middlewares
const { checkAuthorization, preUpdateClass, upload } = require('../middlewares');

// get classes
classRouter.get('/', checkAuthorization, classController.getClasses);
classRouter.get('/:id', checkAuthorization, classController.getSingleClass);
classRouter.post('/', checkAuthorization, classController.createClass);
classRouter.put('/:id', checkAuthorization, upload.single('picture'), preUpdateClass, classController.updateClass);
classRouter.post('/enrollment', checkAuthorization, classController.enrollClass);
classRouter.put('/:id', checkAuthorization, classController.updateClass);

module.exports = classRouter;
