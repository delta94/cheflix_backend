const express = require('express');
const userRouter = express.Router();

// database service
const { userService } = require('../services');
// controllers
const { userController } = require('../controllers');
// middlewares
const { checkAuthorization, preUpdateUser, upload } = require('../middlewares');

// get user
userRouter.get('/:id', checkAuthorization, userController.getUser);
// create user
userRouter.post('/', userController.createUser);
// update user
userRouter.put('/:id', checkAuthorization, upload.single('picture'), preUpdateUser, userController.updateUser);
// get jwt token
userRouter.post('/tokens', userController.createToken);

// for admin
userRouter.get('', userController.getUserList);

module.exports = userRouter;
