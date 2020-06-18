const express = require('express');
const classRouter = express.Router();

// database service
const { classService } = require('../services');
// controllers
const { classController } = require('../controllers');

// get user
classRouter.get('/:id', classController.getClass);
// create user
classRouter.post('/', classController.createClass);
// update user
classRouter.put('/:id', classController.updateClass);

module.exports = classRouter;
