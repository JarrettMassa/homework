//Dependencies
var db = require("../models");

module.exports = function(app,db) {
//================================GET ROUTES================================
    app.get("/api/users", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.User.findAll({}).then(function(dbUser) {
        // We have access to the todos as an argument inside of the callback function
        res.json(dbUser);
        });
    });

    app.get("/api/schedule", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Schedule.findAll({}).then(function(dbSchedule) {
          // We have access to the todos as an argument inside of the callback function
          res.json(dbSchedule);
        });
    });

    app.get("/api/studio", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Studio.findAll({}).then(function(dbStudio) {
          // We have access to the todos as an argument inside of the callback function
          res.json(dbStudio);
        });
    });

    app.get("/api/login", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Login.findAll({}).then(function(dbLogin) {
          // We have access to the todos as an argument inside of the callback function
          res.json(dbLogin);
        });
    });


//================================POST ROUTES================================
//POST for creating a new musician account   
    app.post("/signup/new-musician", function (req,res) {
        //Create a record into Login table
        db.Login.create({
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        }).then(function(dbLogin){
            res.json(dbLogin)
        });
         //Create a record into Musician table
        db.Musician.create({
            email: req.body.email,
        }).then(function(dbMusician) {
            res.json(dbMusician);
        });

    });

//POST for creating a new studio account
    app.post("/signup/new-studio", function (req,res) {
        //Create a record into Login table
        db.Login.create({
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        }).then(function(err){
            if (err) throw err;
        });
        //Create a record into Studio table
        db.Studio.create({
            email: req.body.email
        }).then(function(err) {
            if (err) throw err;
        });

    });
}
