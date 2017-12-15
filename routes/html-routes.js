var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  app.get("/admin", function (req, res) {
    res.render("admin");
  });

  app.get("/home", function (req, res) {
    res.render("index");
  });

  app.get("/api/open", function (req, res) {
    res.render("open-pack");
  });

  app.get("/loot", function (req, res) {
    res.render("open-pack");
  });

  app.get("/collection", function (req, res) {
    db.Item.findAll({}).then(function (data) {
      var hbsObject = {
        monsters: data
      }; 
      res.render("collection", hbsObject);
    });
  });

};
