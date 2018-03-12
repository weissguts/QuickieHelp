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
    app.get("/", function(req, res) {
        res.render("index");
    });

};
