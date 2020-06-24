const express = require('express');
const router = express.Router();

const userRouter = require('./users');
const classRouter = require('./classes');
const materialRouter = require('./materials');
const adminRouter = require('./admin');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('cheflix api enpoint!');
});

router.use('/users', userRouter);
router.use('/classes', classRouter);
router.use('/materials', materialRouter);
router.use('/admin/', adminRouter);

module.exports = router;
