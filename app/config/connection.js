// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


// mysql://bb339923bd0c2f:86dd5691@us-cdbr-iron-east-05.cleardb.net/heroku_9cd01df6b2ae19e?reconnect=true
// Require mysql
var mysql = require("mysql");
// Set up connection information
var connection = mysql.createConnection({
    port: 3306,
    host: "us-cdbr-iron-east-05.cleardb.net",
    user: "bb339923bd0c2f",
    password: "86dd5691",
    database: "heroku_9cd01df6b2ae19e"
});
// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
// Export connection
module.exports = connection;

