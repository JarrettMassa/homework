// Routes
// =============================================================
module.exports = function(app,db) {
  // GET route for getting all of the todos

  app.get("/api/seed", function(req, res) {

    db.User.create({
      first_name: 'Guy',
      last_name: 'Incognito',
      email: 'guyincognito@gmail.com'
    }).then(function(dbUser) {
    });
      db.User.create({
      first_name: 'Dave',
      last_name: 'Davidson',
      email: 'davedavidson@gmail.com'
    }).then(function(dbUser) {
    });
      db.User.create({
      first_name: 'Sally',
      last_name: 'McSallyface',
      email: 'sallymcsallyface@gmail.com'
    }).then(function(dbUser) {
    });
      db.User.create({
      first_name: 'Chandra',
      last_name: 'Levy',
      email: 'chandralevy@gmail.com'
    }).then(function(dbUser) {
    });
      db.User.create({
      first_name: 'Chest',
      last_name: 'Rockwell',
      email: 'chestrockwell@gmail.com'
    }).then(function(dbUser) {
    });
  });


};

