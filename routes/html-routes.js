var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("mainp");
  });

  app.get("/register", function (req, res) {
    res.render("mainp");
  });

  app.get("/admin", function (req, res) {
    res.render("admin");
  });
  app.get("/api/open", function (req, res) {
    res.render("newpack");
  });
  app.get("/profile", function (req, res) {

    db.Item.findAll({}).then(function (data) {
      var hbsObject = {
        monsters: data
      };
      
      console.log("HBS: " + hbsObject);
      console.log("data: " + data);
      console.log("Monsters: " + monsters);

      res.render("index", hbsObject);
  
      console.log("HBS: " + hbsObject);
      console.log("data: " + data);
      console.log("Monsters: " + monsters);
    });
  });

};
