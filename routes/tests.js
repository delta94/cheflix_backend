const express = require('express');
const testRouter = express.Router();

// database service
const { userService } = require('../services');
// controllers
const { userController } = require('../controllers');
// middlewares
const { checkAuthorization } = require('../middlewares');

testRouter.post('/', testController.createTest);