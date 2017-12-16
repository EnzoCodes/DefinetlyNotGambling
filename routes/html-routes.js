var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  app.get("/admin", function (req, res) {
    res.render("admin-cats");
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
    db.Cat.findAll({}).then(function (data) {
      var hbsObject = {
        kitty: data
      }; 
      res.render("collection", hbsObject);
    });
  });

  app.get("/*", function (req, res) {
    db.User.findOne({}).then(function (data) {
      var coinCount = {
        coins: data.coin_count
      }; 
      res.render("/*", coinCount);
    });
  });

};
