const express = require('express');
const userRouter = express.Router();

// database service
const { userService } = require('../services');
// controllers
const { userController } = require('../controllers');
// middlewares
const { checkAuthorization } = require('../middlewares');

// get user
userRouter.get('/:id', checkAuthorization, userController.getUser);
// create user
userRouter.post('/', userController.createUser);
// update user
userRouter.put('/:id', userController.updateUser);
// get jwt token
userRouter.post('/tokens', userController.createToken);

module.exports = userRouter;
