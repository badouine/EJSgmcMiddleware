var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var date = new Date();
var current_hour = date.getHours();
var current_date = date.getDay();
  if(9 < current_hour < 17 && current_date < 6){
    app.use(function (req, res, next) {
      next();
    });
  }



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

/**
 * In this checkpoint, we are going to create a web application that contains three pages:

Home page.
Our Services.
Contact us.
These pages should follow the next requirements: 

Each page should contain a nav bar link (Home, Our Services, Contact us).
Feel free to put any content you want.
The web application is only available during working hours (Monday to Friday,  from 9 to 17).
Instructions
Use Express to create the server and handle routes.
Create a custom middleware to verify the time of the request.
The pages should be styled with CSS.
Optionally, you can use any template engine you want.
 * 
 */