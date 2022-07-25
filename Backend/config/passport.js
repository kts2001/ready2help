/*
Ready2Help
COMP299-SEC004
July-30-2022
passport.js
*/

// const passport = require('passport');

// module.exports = function() {
//   const User = require('../models/user');
  
//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findOne({
//       _id: id
//     }, '-password -salt', (err, user) => {
//       done(err, user);
//     });
//   });

//   require('./local')();
// };