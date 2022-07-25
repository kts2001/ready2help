var express = require('express');
var router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});




router.post('/signup', usersController.signup);

router.post('/signin', usersController.signin);

// router.get('/signout', usersController.signout);

module.exports = router;




module.exports = router;
