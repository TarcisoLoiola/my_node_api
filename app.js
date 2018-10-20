const createError = require('http-errors');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require("./models");
const passport = require("passport");
const session = require("express-session");
const bodyParser = require('body-parser');
// var mysql = require('mysql');
// var connection = require('express-myconnection')

// var usersRouter = require('./routes/users');
const userRoute = require('./routes/users');
const transactionRoute = require('./routes/transactions');
const scheduleRoute = require('./routes/schedule');

const app = express();

//  Passport Strategies
require("./config/passport/passport.js")(passport, db.users);

//  For Passport process.env.
app.use(session({ secret: 'SECRETKEY' ,resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(userRoute);
app.use(transactionRoute);
app.use(scheduleRoute);

require("./routes/auth.js")(app, passport);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
