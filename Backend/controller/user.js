/*
Ready2Help
COMP299-SEC004
July-30-2022
user.js
*/

let User = require('../models/user');
let passport = require('passport');
let jwt = require('jsonwebtoken');
let config = require('../config/config');


let redirect_path = '/add_edit'

function getErrorMessage(err) {
  console.log( err);
  let message = '';

  if (err.message) {
    message = err.message;
  }
  if(err.code){
    switch (err.code) {
      case 11000:
      case 11001:
        message = 'Username already exists';
        break;
      default:
        message = 'Something went wrong';
    }
  } 
  if (err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message)
      message = err.errors[errName].message;
    }
  }

  return message;
};



module.exports.signup = function(req, res, next) {

      let user = new User(req.body);
      user.provider = 'local';

      user.save((err) => {
          if(err) {
              let message = getErrorMessage(err);

             return res.status(400).json (  // added for angular code
             {
                 sucess: false,
                 message: getErrorMessage(err)
             }
         );
         
          }
        

         return res.json(   
             {
                 success: true,
                 message: 'User created sucessfully'
             }
         );
     });

   
 
};



module.exports.signin = function(req,res,next) {
  passport.authenticate(
   'login', 

  async (err, user, info) => {
  try{
    if (err || !user){
      return res.status(400).json(
          {
              success: false,
              message: err || info.getErrorMessage
          }
      );
    }

    req.login(
      user,
      { session: false},
      async (error) => {
          if (error){
            return next(error);  
          }
          const payload = {id: user._id, email:user.email }; // from jwt website
          const token = jwt.sign(
              { 
                  payload: payload
              },
              config.SECRETKEY,
              {
                  algorithm: "HS512",
                  expiresIn: "20min"
              }
          );

          return res.json(
              {
                  sucess: true,
                  token:token
              }
          );
      }
  );
  }catch (error) {
      console.log(error);
      return res.status(400).json({
           sucess: false, 
           message: getErrorMessage(error)
       });
  }
}


  )(req,res,next);

}