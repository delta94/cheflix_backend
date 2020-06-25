const express = require('express');
const materialRouter = express.Router();

// controllers
const { materialController } = require('../controllers');
// middlewares
const { checkAuthorization } = require('../middlewares');

materialRouter.post('/', checkAuthorization, materialController.createMaterial);

materialRouter.put('/', checkAuthorization, materialController.updateMaterial);

module.exports = materialRouter;
