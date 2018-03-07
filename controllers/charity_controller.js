// *********************************************************************************
// user_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models/index");
// Routes
// =============================================================
module.exports = function(app) {
    // Get all charities
    app.get("/api/charities", function(req, res) {
        db.Charity.findAll({})
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });

    //Renders Page

        // Renders Page
        app.get("/charity_eventpage", function(req, res) {
            res.render("charity_eventpage");
        });





    //Add a charity -* Sequelize Code
    app.post("/api/charities", function(req, res) {
        console.log(req.body);
        db.Charity.create({
            organization: req.body.organization,
            orgwebsite: req.body.orgwebsite,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            title: req.body.title,
            email: req.body.email,
            eventname: req.body.eventname,
            description: req.body.description,
            eventdate: req.body.eventdate,
            eventtime: req.body.eventtime,
            eventlocation: req.body.eventlocation,
            userinterestdescription: req.body.userinterestdescription,
            created_at: req.body.created_at
        })
            .then(function(dbPost) {
                res.json(dbPost);
            });
    });
};