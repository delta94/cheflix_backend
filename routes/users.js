var express = require('express');
var router = express.Router();

var { userService } = require('../services');

/* GET users listing. */
router.get('/', async function(req, res, next) {
  return res.json({ message: 'user route' });
});

module.exports = router;
