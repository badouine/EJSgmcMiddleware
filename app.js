var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// parametre setup du moteur de vue
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 404 page non trouve
app.use(function(req, res, next) {
  next(createError(404));
});

// erreur chargement
app.use(function(err, req, res, next) {
  // seul les message d'erreurs
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // rendue de la page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
