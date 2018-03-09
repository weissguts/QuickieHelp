
// user_controller.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var db = require("../models/index");
// Routes
// =============================================================
module.exports = function(app) {
    // Renders Page
    app.get("/aboutus", function(req, res) {
        res.render("aboutus", {isLoggedIn:req.isAuthenticated()});
    });

};