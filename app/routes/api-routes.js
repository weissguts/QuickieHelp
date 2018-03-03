// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
var connection = require("../config/connection.js");
// Routes
// =============================================================
module.exports = function(app) {
    // Get all users
    app.get("/api/all", function(req, res) {
        var dbQuery = "SELECT * FROM users";
        connection.query(dbQuery, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });
    // Add a user
    app.post("/api/new", function(req, res) {
        console.log("User Data:");
        console.log(req.body);
        var dbQuery = "INSERT INTO users (firstname, lastname, email, password, age, interest, categories, created_at) " +
            "VALUES (?,?,?,?,?,?,?,?)";
        connection.query(dbQuery, [req.body.firstname, req.body.lastname, req.body.email, req.body.password, req.body.age,
                req.body.interest, req.body.categories, req.body.created_at],
            function(err, result) {
            if (err) throw err;
            console.log("User Successfully Saved!");
            res.end();
        });
    });
};