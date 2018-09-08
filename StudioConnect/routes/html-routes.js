var path = require("path");

module.exports = function(app){
 //Get function that will route to signup.js file so that HTML files can read it
 app.get("/signup.js", function(req,res){
    res.sendFile(path.join(__dirname, "../public/assets/js/signup.js"))
    });

    app.get('/login', function(req, res) {
        res.render('user-login');
    });
    
    app.get('/signup', function(req,res){
        res.render('signup');
    });
    
};