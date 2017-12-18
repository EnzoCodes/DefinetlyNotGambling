var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  // app.get("/*", function (req, res) {
  //   db.User.findOne({
  //     where: {
  //       id: 1
  //     }
  //   }).then(function (data) {
  //     var hbsObject = {
  //       cc: data
  //     }; 
  //     console.log(hbsObject); 

  //   });
  // });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  // app.get("/admin", function (req, res) {
  //   res.render("admin-cats");
  // });

  app.get("/home", function (req, res) {
    res.render("index", {coins: "200"});
  });

  app.get("/poop", function (req, res) {
    res.render("open-pack");
  });

  // app.get("/loot", function (req, res) {
  //   res.render("open-pack");
  // }); 

  //NEED TO EDIT CODE TO REFLECT A USER SEPCIFIC COLLECTION ONCE WE DO THAT LOGIC//
  app.get("/collection", function (req, res) {
    db.Item.findAll({}).then(function (data) {
      var hbsObject = {
        kitty: data
      }; 
      res.render("collection", hbsObject);
    });
  });

    app.get("/login-page", function(req, res){
        res.render("login-page");
    })
    
    app.get("/admin", function (req, res) {
    db.Item.findAll({}).then(function (data) {
      var hbsObject = {
        kitty: data
      }; 
      res.render("admin-cats", hbsObject);
    });
  });



  //NEED TO WORK OUT COIN COUNT CODE//
  // app.get("/*", function (req, res) {
  //   db.User.findOne({}).then(function (data) {
  //     var coinCount = {
  //       coins: data.coin_count
  //     }; 
  //     res.render("/*", coinCount);
  //   });
  // });

};
