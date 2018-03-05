// *********************************************************************************
// user_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models/index");
// Routes
// =============================================================
module.exports = function(app) {
    // Get all users
    app.get("/api/users", function(req, res) {
        db.User.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });

    });

    //Renders Page

        // Renders Page
        app.get("/signup_page", function(req, res) {
            res.render("signup_page");
        });





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
            categories: req.body.categories,
            created_at: req.body.created_at
        })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

};