// *********************************************************************************
// user_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models/index");
var passport = require("passport");
// Routes
// =============================================================
module.exports = function(app) {
  // Get all users
  app.get("/api/users", function(req, res) {
    db.user.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });

  });

  //Renders Page

  // Renders Page
  app.get("/signup_page", function(req, res) {
    res.render("signup_page");
  });

  app.post('/login',
    passport.authenticate('local', {
      successRedirect: '/profile',
      failureRedirect: '/',
      failureFlash: true
    })
  );

  app.get("/edit_profile", function(req, res) {
  res.render("edit_profile");
  // $("#allEvents").on("click", function(event) {
  //   event.preventDefault();



// $.get("/api/users", function(data) {
//   if (data.length !== 0) {
//     for (var i = 0; i < data.length; i++) {
//       var row = $("<div>");
//       row.addClass("chirp");
//       row.append("<p>" + data[i].user + " chirped.. </p>");
     
//       $("#chirpArea").prepend(row);
//     }
//   }
});




// });




  //Add a user -* Sequelize Code
  app.post("/api/users", function(req, res) {
    console.log(req.body);
    db.User.create({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
        age: req.body.age,
        interest: req.body.interest,
        // categories: req.body.categories,
        created_at: req.body.created_at
      })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });

};

