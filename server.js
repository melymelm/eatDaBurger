//DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

//setting port
var PORT = process.env.PORT || 3000;

var app = express();

//serve static content for the app from the "public" directory
app.use(express.static(__dirname + "/public"));

//parse application
app.use(bodyParser.urlencoded({ extended: false }));

//override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require('express-handlebars');


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//require routes js file
var routes = require("./controllers/burgersController.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

//make sure our app is listening
app.listen(PORT, function() {
	console.log("Listening on port:%s", PORT);
});