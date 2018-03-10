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
require('./controllers/passport.js')(passport, db.user);
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
// require("./controllers/index.js")(app);
require("./controllers/aboutus.js")(app);


// Syncing our sequelize models and then starting our Express app
// =============================================================


const authRoute = require('./controllers/auth.js')(app, passport);

// Load passport strategies


db.sequelize.sync({
  force: false
}).then(function() {
  var server2 = app.listen(3000, function() {
    console.log("App listening on PORT " + PORT);
  });



//** Currenly only works on local server - Chatserver code**//
    // var app2 = require('express')();
    // var http2 = require('http').Server(app2);
    // var io = require('socket.io')(http2);
    //
    //
    // var messageTemplate={'message':'','user':''};
    // var messageArray=[];
    // io.on('connection', function(socket){
    //     console.log('a user connected');
    //     socket.on('message', function(data){
    //         console.log('a user message',data);
    //         var message={'message':data.messageText,'userName':data.userName,'userEmail':data.userEmail,'date':data.date};
    //         // message.message=data.messageText;
    //         // message.user=data.user;
    //         console.log('a user message 2' ,message);
    //         messageArray.push(message);
    //         console.log('messageArray   ',messageArray);
    //         socket.emit('message',message);
    //     });
    //     for(var message in messageArray) {
    //         socket.emit('message',message);
    //     }
    //
    // });
    // http2.listen(3001, function(){
    //     console.log('listening on *:3001');
    // });
});