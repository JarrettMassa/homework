//Dependencies
var db = require("../models");

module.exports = function(app,db) {
//================================GET ROUTES================================
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
//Kristine Note: WHAT IS THIS FOR????
app.post("/api/studio", function(req, res){
    var formFields = req.body;
    if(formFields.pw1 === formFields.pw2){
      //everything looks ok...
      // we have to create the studio record
      res.json({
        success: "Everything ok"
        //signupData: result???
      });
    }
    else{
      res.json({
        error: "message for error"
      });
    }
    
  });

//=========================START Creating New Accounts=========================
//POST for creating a new musician account   
    app.post("/signup/new-musician", function (req,res) {
        //Create a record into Login table
        db.Login.create({
            email: req.body.email,
            password: req.body.password,
            type: req.body.type
        })
        //Create Record into Musician table
        db.Musician.create({
            email: req.body.email,
        }).then(function(result) {
            res.json(result);
        });

    });

//POST for creating a new studio account  
    app.post("/signup/new-studio", function (req,res) {
        //Create a record into Login table
        db.Login.create({
          email: req.body.email,
          password: req.body.password,
          type: req.body.type
        })
        //Create a record into Studio table
        db.Studio.create({
            email: req.body.email
        }).then(function(result) {
            res.json(result);
        });
    });

//=========================END Creating New Accounts=========================



//=========================START Updating Account Information=========================
//GET Route for retrieving info for an existing studio
app.get("/test/:email", function(req,res){ 
    db.Studio.findAll({
        where: {
            email: req.params.email  
        }
    }).then(function(result) {
        // console.log(window.sessionStorage.getItem("email"));
        res.json(result);
      });

});


//PUT route for updating studio listings
    app.put("/edit-listing/update", function (req,res) {
        db.Studio.update ({
            //update what fields you want to update
            name: req.body.name,
            address_1: req.body.address_1,
            address_2: req.body.address_2,
            city: req.body.city,
            state: req.body.state,
            zip: req.body.zip,
            photo_url: req.body.photo_url,
            description: req.body.description,
            equipment: req.body.equipment,
            price: req.body.price
        }, {
            where: {
                email: req.body.email
            }
        }).then(function(result){
            // console.log(req.body);
            res.json(result);
        });
    });

//=========================END Updating Account Information=========================



};//end module.exports
