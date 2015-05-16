var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var LocalStrategy = require('passport-local').Strategy;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());

var api = require('./routes/api');

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', api);

app.use(session({
  secret: process.env.SESSION_SECRET || 'yolo',
  resave: false,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session())

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});



var User = require('./models/user');


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStrategy(function(username, pass, done) {
  User.find({username: username}, function(err, user) {
    if (err) return done(err);

    console.log('found user: ' + username);

    if (!user) {
      return done(null, false, {message: 'Unkown user ' + username});
    }

    user.comparePassword(pass, function(err, matches) {
      if (err) return done(err);

      if (matches) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

app.listen(process.env.port || 3000);
console.log('<--------------- App is running ---------------->');

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});*/

// error handlers

// development error handler
// will print stacktrace
/*if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});*/

module.exports = app;
