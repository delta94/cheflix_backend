const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const classRouter = require('./classes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('cheflix api enpoint!');
});

router.use('/users', userRouter);
router.use('/classes', classRouter);

module.exports = router;
