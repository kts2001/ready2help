let passport = require('passport');
let tickets = require('../models/tickets');
let UserModel = require('../models/user');

function getErrorMessage(err){
    if (err.errors) {
        for (let errName in err.erros){
            if (err.errors[errName].message)return err.errors[errName].message;
        }
        if (err.message){
            return err.message;
        }else{
            return 'Unknown server error';
        }
    }
};

// helper function for guard purposes
exports.requireAuth = function(req, res, next)
{
    passport.authenticate('tokencheck', { session: false }, function(err, user, info) {
        if (err) return res.status(401).json(
          { 
            success: false, 
            message: getErrorMessage(err)
          }
        );
        if (info) return res.status(401).json(
          { 
            success: false, 
            message: info.message
          }
        );
        req.payload = user;
        next();
      })(req, res, next);
}