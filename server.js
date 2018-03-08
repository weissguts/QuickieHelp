// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const path = require('path');
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
const env = require('dotenv').load();

// Sets up the Express App
// =============================================================
// var app = express();
var PORT = process.env.PORT || 3000;
// Requiring our models for syncing
var db = require("./models");
// Sets up the Express app to handle data parsing
// parse application/x-www-form-urlencoded


app.use(bodyParser.urlencoded({
  extended: true
}));

// parse application/json
app.use(bodyParser.json());
// Static directory

app.use(
  session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static("public"));

// Set Handlebars as View Engine.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));

app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./controllers/user_controller.js")(app);
// require("./controllers/charity_controller.js")(app);

require("./controllers/user_controller.js")(app);
require("./controllers/charity_controller.js")(app);
require("./controllers/index.js")(app);
require("./controllers/aboutus.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================


const authRoute = require('./controllers/auth.js')(app, passport);

// Load passport strategies
require('./public/js/passport.js')(passport, db.user);

db.sequelize.sync({
  force: false
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});