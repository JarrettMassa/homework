//Dependencies
var express = require("express");
var cheerio = require("cheerio");
var request = require("request");
var mongojs = require("mongojs");
var bodyParser = require ("body-parser");

//Setup Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Setup Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Database configuration
// Save the URL of our database as well as the name of our collection
var databaseUrl = "test";
var collections = ["testcollection"];

// Use mongojs to hook the database to the db variable
var db = mongojs(databaseUrl, collections);

//requiring models for syncing
// var db = require("./models");

//Static directory
app.use(express.static(__dirname + '/public'));

// =============================================================
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/scrape", function(req, res) {

  request("https://old.reddit.com/r/webdev/", function(error, response, html) {

  // Load the HTML into cheerio and save it to a variable
  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
    var $ = cheerio.load(html);

  // An empty array to save the data that we'll scrape
    var results = [];

  // With cheerio, find each p-tag with the "title" class
  // (i: iterator. element: the current element)
    $("p.title").each(function(i, element) {

    // Save the text of the element in a "title" variable
        var title = $(element).text();

    // In the currently selected element, look at its child elements (i.e., its a-tags),
    // then save the values for any "href" attributes that the child elements may have
        var link = $(element).children().attr("href");

    // Save these results in an object that we'll push into the results array we defined earlier
        results.push({
            title: title,
            link: link
        });
    });

  // Log the results once you've looped through each of the elements found with cheerio
    console.log(results);

    res.json(results);
  }); // End request
}); // End /scrape

app.post("/addNote", function(req, res) {
  
  console.log(req.body.id);
  // db.scrapedb.insert({"continent": "Africa", "country":"Morocco", "majorcities": ["Casablanca", "Fez", "fuck"]})
  res.json(req.body);
}); // End /scrape

app.get("/getNotes", function(req, res) {
  console.log(req.body.id);
  db.article.find();
  res.json(db.article.find());
}); // End /scrape

app.get("/getArticles", function(req, res) {
  res.json(db.articles.find());
});

app.get("/seed", function(req, res) {
  db.articles.insert({"Text": "Test Article 1", "Note":"Test Note 1"});
  db.articles.insert({"Text": "Test Article 2", "Note":"Test Note 2"});
  db.articles.insert({"Text": "Test Article 3", "Note":"Test Note 3"});
  res.json("Seeded!");

});

app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
});
