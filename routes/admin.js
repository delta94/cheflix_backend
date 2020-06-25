const express = require('express');
const adminRouter = express.Router();

// database service
const { userService, classService } = require('../services');
// controllers
const { userController, classController } = require('../controllers');
// middlewares
const { addHeader } = require('../middlewares');


adminRouter.post('/tokens', userController.createAdminToken);

// for admin user
adminRouter.get('/users', userController.getUserList);

adminRouter.get('/users/:id', userController.getUser);

adminRouter.post('/users', userController.createUser);

adminRouter.put('/users/:id', userController.updateUser);

adminRouter.delete('/users/:id', userController.deleteUser);

// for admin class
adminRouter.get('/classes', classController.getAllClass);

adminRouter.get('/classes/:id', classController.getSingleClass);

adminRouter.post('/classes', classController.createClass);

adminRouter.put('/classes/:id', classController.updateClass);

adminRouter.delete('/classes/:id', classController.deleteClass);

module.exports = adminRouter;
