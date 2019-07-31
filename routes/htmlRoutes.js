var db = require("../models");
var scheck = require("../server");
const bcrypt = require('bcrypt');

module.exports = function(app) {
  
  // Load index page
  app.get("/", function(req, res) {
    res.render('index');
  });

  app.get("/signup", function(req, res) {
    res.render('signup');
  });

  // app.route("/login")
  //   .get(scheck.sessionChecker, (req, res) => {
  //     res.render('login', scheck.hbsContent);
  //   })
  //   .post((req, res) => {
  //     console.log("req: " + req);
  //     console.log("res: " + res);
  //     db.Profile.findOne({
  //       where: {
  //         email: req.body.email
  //       }
  //     })
  //     .then(profile => {
  //       if (bcrypt.compareSync(req.body.password, profile.password)) {
  //         console.log("req: " + req);
  //         console.log("res: " + res);    
  //         req.session.user = profile.dataValues;
  //         res.redirect("/profile");
  //       }
  //       else {
  //         res.send("User does not exist");
  //       }
  //     })
  //     .catch(err => {
  //       res.send("error: " + err);
  //       console.log("error with logging in");
  //     })      
  //   });
  
    app.post('/auth', function(req, res) {
      db.Profile.findOne({
        where: {
          username: req.body.username,
          password: req.body.password
        }
      })
      .then(dbprofile => {
        if (dbprofile) {
          req.session.user = dbprofile.dataValues;
          res.redirect('/profile');
        }
        else {
          res.redirect('/');
        }
      });
      // var in_username = request.body.username;
      // var in_password = request.body.password;
      // if (in_username && in_password) {
      //     db.Profile.findOne({
      //       where: {
      //         username: request.body.username,
      //       }
      //     })
      //     .then(profile => {
      //       console.log(profile);
      //         if(!profile) {
      //           response.redirect('/');
      //         } else {
      //           req.session.user = user.dataValues;
      //           response.redirect('/profile');  
      //         }
      //     })
      //     .catch(err => {
      //         console.log("user does not exist" + err);
      //         response.redirect('/');
      //     })
      // } else {
      //     response.send('Please enter Username and Password!');
      //     response.end();
      // }
  });

  app.post('/register', function(req, res) {
    db.Profile.create({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email    
    })
    .then(profile => {
      req.session.user = profile.dataValues;
      res.redirect("/profile");
    })
    .catch(err => {
      res.redirect("/signup")
    })      

    // db.Profile.findOne({
    //   where: {
    //     email: req.body.email
    //   }
    // })
    // .then(profile => {
    //   if (!profile) {
    //     db.Profile.create({
    //       name: req.body.name,
    //       username: req.body.username,
    //       password: req.body.password,
    //       email: req.body.email    
    //     })
    //     .then(profile => {
    //       req.session.user = profile.dataValues;
    //       console.log(req.session.user);
    //       res.redirect("/profile");
    //     })
    //     .catch(err => {
    //       res.redirect("/signup")
    //     })      
    //   } else {
    //     console.log("this user already exists")
    //   }
    // })
    // .catch(err => {
    //   console.log("error with sign up overall")
    // })      
});


  // app.route("/signup") 
  //   .get((req, res) => {
  //     res.render('signup', scheck.hbsContent)
  //   })
  //   .post((req, res) => {
  //     var profileData = {
  //       name: req.body.name,
  //       username: req.body.username,
  //       password: req.body.password,
  //       email: req.body.email
  //     }
  //     db.Profile.findOne({
  //       where: {
  //         email: req.body.email
  //       }
  //     })
  //     .then(profile => {
  //       if (!profile) {
  //         var hash = bcrypt.hashSync(profileData.password, 10);
  //         profileData.password = hash;
  //         db.Profile.create({
  //           name: req.body.name,
  //           username: req.body.username,
  //           password: hash,
  //           email: req.body.email    
  //         })
  //           .then(profile => {
  //             req.session.user = profile.dataValues;
  //             res.redirect("/");
  //           })
  //           .catch(err => {
  //             res.send("error: " + err)
  //             console.log("error with creating the user")
  //           })      
  //       } else {
  //         console.log("this user already exists")
  //       }

  //     })
  //     .catch(err => {
  //       console.log("error with sign up overall")
  //     })      
  // });

  app.get("/profile", function(req, res) {
    if (req.session.user) {
      res.render("profile");
    } else {
      res.redirect("/");
    }
  });
  
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

// // route for Home-Page
// app.get('/', sessionChecker, (req, res) => {
//   res.redirect('/login');
// });


// route for user signup
// app.route('/signup')
//   //.get(sessionChecker, (req, res) => {
//   .get((req, res) => {
//       //res.sendFile(__dirname + '/public/signup.html');
//       res.render('signup', hbsContent);
//   })
//   .post((req, res) => {
//       User.create({
//           username: req.body.username,
//           //email: req.body.email,
//           password: req.body.password
//       })
//       .then(user => {
//           req.session.user = user.dataValues;
//           res.redirect('/dashboard');
//       })
//       .catch(error => {
//           res.redirect('/signup');
//       });
//   });


// // route for user Login
// app.route('/login')
//   .get(sessionChecker, (req, res) => {
//       //res.sendFile(__dirname + '/public/login.html');
//       res.render('login', hbsContent);
//   })
//   .post((req, res) => {
//       var username = req.body.username,
//           password = req.body.password;

//       User.findOne({ where: { username: username } }).then(function (user) {
//           if (!user) {
//               res.redirect('/login');
//           } else if (!user.validPassword(password)) {
//               res.redirect('/login');
//           } else {
//               req.session.user = user.dataValues;
//               res.redirect('/dashboard');
//           }
//       });
//   });


// // route for user's dashboard
// app.get('/dashboard', (req, res) => {
//   if (req.session.user && req.cookies.user_sid) {
//   hbsContent.loggedin = true; 
//   hbsContent.userName = req.session.user.username; 
//   //console.log(JSON.stringify(req.session.user)); 
//   console.log(req.session.user.username); 
//   hbsContent.title = "You are logged in"; 
//       //res.sendFile(__dirname + '/public/dashboard.html');
//       res.render('index', hbsContent);
//   } else {
//       res.redirect('/login');
//   }
// });


// // route for user logout
// app.get('/logout', (req, res) => {
//   if (req.session.user && req.cookies.user_sid) {
//   hbsContent.loggedin = false; 
//   hbsContent.title = "You are logged out!"; 
//       res.clearCookie('user_sid');
//   console.log(JSON.stringify(hbsContent)); 
//       res.redirect('/');
//   } else {
//       res.redirect('/login');
//   }
// });


// // route for handling 404 requests(unavailable routes)
// app.use(function (req, res, next) {
// res.status(404).send("Sorry can't find that!")
// });