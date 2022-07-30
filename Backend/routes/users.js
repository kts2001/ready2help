var express = require('express');
var router = express.Router();
let usersController = require('../controller/user');
let passport = require('passport');
let authController = require('../controller/auth');


// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });




router.post('/signup', usersController.signup);

router.post('/signin', usersController.signin);



// router.get('/me', authController.requireAuth, usersController.myprofile);

module.exports = router;




module.exports = router;
