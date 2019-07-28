var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render('index');
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  app.post("/signup", function(req, res) {
    db.Profile.create({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.pass
    })
    .then(profile => {
      req.session.user = profile.dataValues;
      res.redirect("/profile");
    });
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


// // route for user signup
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