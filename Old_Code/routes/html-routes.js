// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    // index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/signup", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/signup_page_heroku.html"));
    });
    app.get("/charity-create-event", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/charity_eventpage_heroku.html"));
    });
    app.get("/aboutus", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/aboutus_page_heroku.html"));
    });

};