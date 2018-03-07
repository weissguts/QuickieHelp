module.exports = function(app) {

  var express = require('express');
  var passport = require('passport');
  var Strategy = require('passport-local').Strategy;
  var db = require('./config');

  findById = function(id, cb) {
    process.nextTick(function() {
      var idx = id - 1;
      if (records[idx]) {
        cb(null, records[idx]);
      } else {
        cb(new Error('User ' + id + ' does not exist'));
      }
    });
  }

  findByEmail = function(email, cb) {
    process.nextTick(function() {
      for (var i = 0, len = records.length; i < len; i++) {
        var record = records[i];
        if (record.email === email) {
          return cb(null, record);
        }
      }
      return cb(null, null);
    });
  }

  passport.use(new Strategy(
    function(email, password, cb) {
      db.email.findByEmail(email, function(err, user) {
        if (err) {
          return cb(err);
        }
        if (!user) {
          return cb(null, false);
        }
        if (user.password != password) {
          return cb(null, false);
        }
        return cb(null, user);
      });
    }));


  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the db when
  // deserializing.
  passport.serializeUser(function(user, cb) {
    cb(null, user.id);
  });

  passport.deserializeUser(function(id, cb) {
    db.users.findById(id, function(err, user) {
      if (err) {
        return cb(err);
      }
      cb(null, user);
    });
  });




  // Create a new Express application.
  var app = express();

  // Configure view engine to render EJS templates.
  app.set('views', __dirname + '/views');
  app.set("view engine", "handlebars")

  // Use application-level middleware for common functionality, including
  // logging, parsing, and session handling.
  app.use(require('morgan')('combined'));
  app.use(require('cookie-parser')());
  app.use(require('body-parser').urlencoded({
    extended: true
  }));
  app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
  }));

  // Initialize Passport and restore authentication state, if any, from the
  // session.
  app.use(passport.initialize());
  app.use(passport.session());

  // Define routes.
  app.get('/',
    function(req, res) {
      res.render('./controllers/index.js', {
        user: req.user
      });
    });

  app.get('/login',
    function(req, res) {
      res.render('./controllers/index.js');
    });

  app.post('/login',
    passport.authenticate('./controllers/index.js', {
      failureRedirect: '/login'
    }),
    function(req, res) {
      res.redirect('/');
    });

  app.get('/logout',
    function(req, res) {
      req.logout();
      res.redirect('/');
    });

  app.get('/profile',
    require('connect-ensure-login').ensureLoggedIn(),
    function(req, res) {
      res.render('profile', {
        user: req.user
      });
    });
};