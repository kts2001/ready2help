var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
let compress = require('compression');
let methodOverride = require('method-override');
let passport = require('passport');
let errorHandler = require('./error-handler');
let cors = require('cors');

var app = express();

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var ticketlistRouter = require('../routes/ticketlist');

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set up passport
app.use(passport.initialize());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ticketlist', ticketlistRouter);

/* Please note that any error handler must be put after the routes */
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
   res.status(404).json(
     {
       statusCode: 404,
       message:"The endpoint does not exsists"
     }
   );
 
 });
 


module.exports = app;
