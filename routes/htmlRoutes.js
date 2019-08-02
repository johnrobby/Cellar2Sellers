var db = require("../models");
const bcrypt = require('bcrypt');

const saltRounds = 10;

module.exports = function (app) {
  var User = {userName: ''};

  // Load index page
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/signup", function(req, res) {

    res.render('signup');
  });



    app.post('/auth', function(req, response) {
      db.Profile.findOne({
        where: {
          username: req.body.username,
        }
      })
      .then(dbprofile => {
        if (dbprofile) {
          bcrypt.compare(req.body.username, dbprofile.dataValues.password, function(err, res) {
            if (res) {
              req.session.user = dbprofile.dataValues;
              response.redirect('/profile');    
            }
            else {

              response.redirect('/');
            }
        });
        }
        else {
          response.redirect('/');
        }
      });
  
  });

  app.post('/register', function(req, res) {

    var txtpassword = req.body.password;

    bcrypt.hash(txtpassword, saltRounds, function(err, hash) {
      db.Profile.create({
        name: req.body.name,
        username: req.body.username,
        password: hash,
        email: req.body.email    
      })
      .then(profile => {
        req.session.user = profile.dataValues;
        res.redirect("/profile");
      })
      .catch(error => {
        res.redirect("/signup")
      })      
    });

});


  app.get("/profile", function(req, res) {
    if (req.session.user) {
      User.userName = req.session.user.username;
      db.Wine.findAll().then(dbwine => {
        res.render("profile", {User, dbwine}); 
      })
    } else {
      res.redirect("/");
    }

  });
  

  app.get('/logout', (req, res) => {
    if (req.session.user) {
      User.userName = '';
      req.session.destroy();
      res.redirect('/');
    } else {
      console.log("error with destroying");
    }
});

  app.get("*", function (req, res) {
    res.render("404");
  });
};