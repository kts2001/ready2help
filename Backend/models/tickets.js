/*
*   Ready2Help
*   COMP299-SEC004
*   July-14-2022
*   tickets.js
*/

let mongoose = require('mongoose');

// create a model class for the ticket inventory

let tickets = mongoose.Schema(
    {
      name: String,
      email: String,
      ticketStatus: String,
      ticketDescription: String,
      recordnum: Date,
      ticketPriority: String

    },
    {
        collection: "tickets"
    }
    
);




module.exports = mongoose.model('Tickets', tickets);