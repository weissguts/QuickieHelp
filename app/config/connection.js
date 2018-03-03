// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************


// mysql://b9r88oj2hf66ji45:tcuoj5gq2irjwvpg@y0nkiij6humroewt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/p9ba4rxuwzc4pgoz

// Require mysql
var mysql = require("mysql");
// Set up connection information
var connection;
if(process.env.JAWSDB_URL) {
    //Heroku deployment
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    //local host
    connection = mysql.createConnection({
        root: 3000,
        host: "localhost",
        user: "root",
        password: "root",
        database: "p9ba4rxuwzc4pgoz"
    });
}

// Export connection
module.exports = connection;

