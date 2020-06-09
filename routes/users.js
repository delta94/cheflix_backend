const express = require('express');
const userRouter = express.Router();

// database service
const { userService } = require('../services');

// controllers
const { userController } = require('../controllers');

// get user
userRouter.get('/:id', userController.getUser);

// create user
userRouter.post('/', userController.createUser);

module.exports = userRouter;
