const express = require('express');
const router = express.Router();

const { userService } = require('../services');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  return res.json({ message: 'user route' });
});

module.exports = router;
