/*
*   Ready2Help
*   COMP299-SEC004
*   July-14-2022
*   db.js
*/

//readyhelp
//0lWG4LbmCqJuTPIP

let URI = require('./config').ATLASDB;

// The set up of the database

let mongoose = require('mongoose');

module.exports = function() {
    mongoose.connect(URI);
    let mongoDb = mongoose.connection;

    mongoDb.on('error', console.error.bind(console, 'Connection Error:'));
    
    mongoDb.once('open', () => {
        console.log('Connected to MongoDB......');
    });

    

    return mongoDb;
}

