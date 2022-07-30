var express = require('express');
var router = express.Router();
let controllerIndex = require('../controller/index');

/* GET home page. */
router.get('/', controllerIndex.home); 


// /* GET Main page */

// router.get('/', controllerIndex.home);

module.exports = router;


