const express = require('express');
const adminRouter = express.Router();

// database service
const { userService, classService } = require('../services');
// controllers
const { userController, classController } = require('../controllers');
// middlewares
const { addHeader } = require('../middlewares');

// for admin
adminRouter.get('/users', userController.getUserList);

adminRouter.get('/users/:id', userController.getUser);

adminRouter.post('/users/:id', userController.createUser);

adminRouter.put('/users/:id', userController.updateUser);

adminRouter.delete('/users/:id', userController.getUserList);

module.exports = adminRouter;
