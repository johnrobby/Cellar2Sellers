var db = require("../models");

module.exports = function(app) {
  app.post("/api/wines", function(req, res) {
    db.Wine.create({
      title: req.body.title,
      country: req.body.country,
      appelation: req.body.appelation,
      vintage: req.body.vintage,
      cost: req.body.cost,
      website: req.body.website,
      sale: req.body.sale
    }).then(function(dbwine) {
      console.log(dbwine);
      res.redirect("/profile");
    });
  });
};
