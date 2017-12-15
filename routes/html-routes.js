var db = require("../models");

module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("mainp");
  });

  app.get("/api/open", function (req, res) {
    res.render("mainp");
  });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  app.get("/admin2", function (req, res) {
    res.render("admin_cats");
  });

  app.get("/admin", function (req, res) {
    res.render("admin");
  });

  app.get("/profile/cats", function (req, res) {
    //console.log(req.body);
    db.Cat.findAll({}).then(function (data) {
      var hbsObject = {
        cats: data
      };
  
    res.render("partials/profile_page", hbsObject);
  });
});

  app.get("/profile", function (req, res) {
    console.log(req.body);
    db.Item.findAll({}).then(function (data) {
      var hbsObject = {
        cats: data
      };

      res.render("index", hbsObject);
    });
  });

};
