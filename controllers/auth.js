var db = require("../models");

module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/signup', (req, res) => {
    res.render('signup');
  });

  // app.get('/signin', (req, res) => {
  //   res.render('user');
  // });

  app.post(
    '/signup',
    passport.authenticate('local-signup', {
      successRedirect: '/user',
      failureRedirect: '/index'
    })
  );

  app.get('/index', isLoggedIn, (req, res) => {
    res.render('index');
  });

  app.get('/logout', (req, res) => {
    req.session.destroy(err => {
      res.redirect('/');
    });
  });

  app.post(
    '/signin',
    passport.authenticate('local-signin', {
      successRedirect: '/index',
      failureRedirect: '/index'
    })
  );

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();

    res.redirect('/index');
  }
}