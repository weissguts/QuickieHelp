// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
    // Get all users
    app.get("/api/all/", function(req, res) {
        db.Post.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    //Add a user -* Sequelize Code
    app.post("/api/new", function(req, res) {
        console.log(req.body);
        db.Post.create({
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