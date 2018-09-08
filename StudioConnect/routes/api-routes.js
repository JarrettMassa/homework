// Routes
// =============================================================
module.exports = function(app,db) {
  // GET route for getting all of the todos
  app.get("/api/users", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.User.findAll({}).then(function(dbUser) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbUser);
    });
  });

  app.get("/api/appointment", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Appointment.findAll({}).then(function(dbAppointment) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbAppointment);
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

};

