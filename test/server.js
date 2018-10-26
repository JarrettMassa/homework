// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var xxx = [
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup 1.",
    dinner: "Poop with 1 nuggets."
  },
  {
    lunch: "Beet & Goat Cheese Salad with minestrone soup 2.",
    dinner: "Poop with 2 nuggets."
  }]
  ;

// Routes
app.get("/weekday", function(req, res) {
  // var x = render("index", lunch);
  res.render("index", xxx[1]);
});

app.get("/lunches", function(req, res) {
  res.render("all-lunches", {foods: xxx});
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
