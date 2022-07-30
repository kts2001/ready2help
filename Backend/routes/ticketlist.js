/*
*   Ready2Help
*   COMP299-SEC004
*   July-14-2022
*   index.js
*/


var express = require('express');
var router = express.Router();
let ticketController = require('../controller/tickets');
let authController = require('../controller/auth');

// let tickets = require('../models/tickets');



// function getErrorMessage(err) {
//     if(err.errors) {
//         for (let errName in err.errors){
//             if (err.errors[errName].message) return err.errors[errName].message; // this has been added to change to angular
//         }
//     }
//     if(err.message) {
//         return err.message;    
//     }else {
//         return 'Unknown server error';
//     }
//  };






/* GET add pages */

router.get('/list', ticketController.tickets);
router.post('/add', authController.requireAuth, ticketController.processAdd);
router.put('/edit/:id', authController.requireAuth,  ticketController.processEdit);
router.delete('/delete/:id', authController.requireAuth, ticketController.performDelete);

//router.post('/delete/:id', requireAuth, ticketController.performDelete);

module.exports = router;



