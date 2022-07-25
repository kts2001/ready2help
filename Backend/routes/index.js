var express = require('express');
var router = express.Router();
let controllerIndex = require('../controller/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ready2Help About us' });
});


/* GET Main page */

router.get('/', controllerIndex.home);

module.exports = router;


