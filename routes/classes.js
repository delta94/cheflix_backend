const express = require('express');
const classRouter = express.Router();

// database service
const { classService } = require('../services');
// controllers
const { classController } = require('../controllers');
// middlewares
const { checkAuthorization } = require('../middlewares');

// get classes
classRouter.get('/', checkAuthorization, classController.getClasses);
classRouter.post('/', checkAuthorization, classController.createClass);

module.exports = classRouter;
