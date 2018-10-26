//Dependencies
var db = require("../models");

module.exports = function(app,db) {
    app.get("/api/signin", function(req, res) {
    	console.log(req);
        db.Login.findAll({}).then(function(dbLogin) {
            res.json(dbLogin);
        });

    }); // End app.get
}; // End module.exports