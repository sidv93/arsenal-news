//server.js

//requiring modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var User = require('./app/models/user');
//requiring db

var db = require('./config/db');

//port
var port = process.env.PORT || 8080;

mongoose.connect('mongodb://localhost/arsenal');5

User.find({}, function(err,users){
	if(err)
		throw err;
	console.log("users=" +users);
})
app.use(bodyParser.json());

app.use(bodyParser.json({type : 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + './public'));

//routes
require("./app/routes")(app);

app.listen(port);

console.log("Server running on " + port);

exports = module.export = app;