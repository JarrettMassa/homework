//Dependencies
var express = require("express");
var bodyParser = require ("body-parser");
var exphbs = require("express-handlebars");

//Setup Express App
var app = express();
var PORT = process.env.PORT || 8080;

//requiring models for syncing

var db = require("./models");

//Setup Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static directory
app.use(express.static(__dirname + '/public'));

//Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Routes
// =============================================================
require("./routes/api-routes.js")(app,db);
require("./routes/seed-route.js")(app,db);
// require("./routes/html-routes.js")(app);

app.get('/login', function(req, res) {
    res.render('user-login');
});

app.get('/signup', function(req,res){
    res.render('signup');
});

// =============================================================

// Sync models and then start Express app

db.connection.sync({ force: true }).then(function() {

    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});