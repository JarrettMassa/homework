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

app.get('/login', function(req, res) {
    res.render('user-login', {
        layout:"signup-wrapper"
    });
});

app.get('/signup', function(req,res){
    res.render('signup', {
        layout: "signup-wrapper"
    });
});

app.get('/edit', function(req,res){
    res.render('edit-profile');
});

// app.get('/view-listing', function(req,res){
//     res.render('view-listing');
// });
// var router = express.Router();

// router.get("/signup", function(req, res){
//     res.render("signup")
// app.get('/login', function(req, res) {
//     res.render('user-login');
// });

// app.get('/signup', function(req,res){
//     res.render('signup');
// });
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app,db);
require("./routes/seed-route.js")(app,db);
require("./routes/signin-route.js")(app,db);

// =============================================================


// Sync models and then start Express app
//{ force: true }
db.connection.sync().then(function() {
    app.listen(PORT, function(){
        console.log("App listening on PORT " + PORT);
    });
});
