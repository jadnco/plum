var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');
var BearerStrategy = require('passport-http-bearer').Strategy;
var outh2orize = require('oauth2orize');

var colors = require('colors');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var app = express();

// Initialize OAuth 2.0 server
var oauthServer = outh2orize.createServer();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cookieParser());

var api = require('./routes/api');

//app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/api', api);

// Express session initialization
app.use(session({
  secret: process.env.SESSION_SECRET || 'yolo',
  resave: false,
  saveUninitialized: true
}));

// Passport session initialization
app.use(passport.initialize());
app.use(passport.session());

// Import User mongoose model
var User = require('./models/user');

/*passport.use(new LocalStrategy(function(username, password, done) {
  User.findOne({username: username}, function(err, user) {
    if (err) return done(err);
 
    if (!user) {
      console.log('no user found');
    } else {
      console.log('found user: ' + user);
    }

    // No user object found
    if (!user) {
      return done(null, false, {message: 'Unkown user ' + username});
    }

    // Compare password to hashed value in database
    user.compare(password, function(err, matches) {
      if (err) return done(err);

      if (matches) {
        // Validation success; Send user object
        return done(null, user);
      } else {
        // Validation did not pass; don't send user, send message
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
})); */

/* passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
}); */

passport.use(new BearerStrategy(function(username, password, done) {
  User.findOne({username: username}, function(err, user) {
    if (err) return done(err);
 
    if (!user) {
      console.log('no user found');
    } else {
      console.log('found user: ' + user);
    }

    // No user object found
    if (!user) {
      return done(null, false, {message: 'Unkown user ' + username});
    }

    // Compare password to hashed value in database
    user.compare(password, function(err, matches) {
      if (err) return done(err);

      if (matches) {
        // Validation success; Send user object
        return done(null, user);
      } else {
        // Validation did not pass; don't send user, send message
        return done(null, false, {message: 'Invalid password'});
      }
    });
  });
}));

app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send({
    isAuthenticated: req.isAuthenticated(),
    user: req.user
  });
});

app.post('/token', passport.authenticate('bearer'), function(req, res) {
  // Redirect on user login success
  console.log('Login success!'.bgGreen.black);
  
  res.json({
    username: req.user.username,
    name: req.user.name
  });
  //res.redirect('/');
});

app.listen(process.env.port || 3000);
console.log('<--------------- App is running ---------------->'.bgRed.yellow);

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
