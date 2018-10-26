var path = require("path");

module.exports = function(app){
 //Get function that will route to signup.js file so that HTML files can read it
    app.get("/signup.js", function(req,res){
    res.sendFile(path.join(__dirname, "../public/assets/js/signup.js"))
    });

//Get function that will route to editlisting.js file so that HTML files can read it
app.get("/editlisting.js", function(req,res){
    res.sendFile(path.join(__dirname, "../public/assets/js/editlisting.js"))
    });

    app.get('/', function(req, res) {
        res.render('landing');
    });

    app.get('/login', function(req, res) {
        res.render('user-login');
    });
    
    app.get('/signup', function(req,res){
        res.render('signup');
    });

    app.get("/signin.js", function(req,res){
        res.sendFile(path.join(__dirname, "../public/assets/js/signin.js"))
    });

    app.get('/edit-profile', function(req,res){
        res.render('edit-profile');
    });
    
    app.get('/edit-listing', function(req,res){
        res.render('edit-listing');
    });
    
    //HTML routing to edit listing page with email as identifier in URL
    app.get('/edit-listing/:email', function(req,res){
        res.render('edit-listing');

    });

    app.get('/view-listing', function(req,res){
        res.render('view-listing');
    });

    app.get('/musician-main', function(req,res){
        res.render('musician-main');
    });

    app.get("/musician-main.js", function(req,res){
        res.sendFile(path.join(__dirname, "../public/assets/js/musician-main.js"))
    });

    app.get('/musician-main', function(req,res){
        res.render('musician-main');
    });

    app.get('/studio-main', function(req,res){
        res.render('studio-main');
    });
    
};