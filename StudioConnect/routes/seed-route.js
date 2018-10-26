// Routes
// =============================================================
module.exports = function(app,db) {
  // GET route for getting all of the todos

  app.get("/api/seed", function(req, res) {

    db.User.create({
      email: 'DanBuckland@gmail.com',
      first_name: 'Dan',
      last_name: 'Buckland',
      match_index: '25',
      picture: 'https://media.licdn.com/dms/image/C5103AQGjtQ0m9PX_yg/profile-displayphoto-shrink_800_800/0?e=1545264000&v=beta&t=dGpwVaSn2x--4cHoUHD3_3deAquCWQIeMJM9r9tK4OY'
    }).then(function(dbUser) {
    });

    res.json("Seeded!");

  }); // End app.get seed



};

