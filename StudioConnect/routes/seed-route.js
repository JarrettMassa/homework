// Routes
// =============================================================
module.exports = function(app,db) {
  // GET route for getting all of the todos

  app.get("/api/seed", function(req, res) {

    db.Musician.create({
      first_name: 'Guy',
      last_name: 'Incognito',
      email: 'guyincognito@gmail.com'
    }).then(function(dbMusician) {
    });

    db.Studio.create({
      name: 'Sweatshop',
      address_1: '244 Meserole Ave',
      address_2: ' ',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11209',
      email: 'sweatshopstudios@gmail.com',
      description: 'An awesome studio that smells terrible',
      price: '20.00',
      equipment: 'Guitar, Bass, Drums, PA, Triangle'
    }).then(function(dbStudio) {
    });

    db.Login.create({
      email: 'guyincognito@gmail.com',
      password: 'Password123!',
      type: 'musician'
    }).then(function(dbLogin) {
    });

    db.Login.create({
      email: 'sweatshopstudios@gmail.com',
      password: 'Password123!',
      type: 'studio'
    }).then(function(dbLogin) {
    });

    db.Appointment.create({
      studio_id: '1',
      last_name: 'Incognito',
      email: 'guyincognito@gmail.com',
      appt_date: '12/23/2018',
      appt_time: '14:00'
    }).then(function(dbAppointment) {
    });

    res.json("Seeded!");

  }); // End app.get seed



};

