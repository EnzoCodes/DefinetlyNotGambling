var db = require("../models");
var cookieParser = require("cookie-parser");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  app.get("/home", function (req, res) {
    res.render("open-pack");
  });

  app.get("/api/open", function (req, res) {
    res.render("open-pack");
  });

  app.get("/loot", function (req, res) {
    res.render("open-pack");
  });

  //NEED TO EDIT CODE TO REFLECT A USER SEPCIFIC COLLECTION ONCE WE DO THAT LOGIC//
  app.get("/collection", function (req, res) {
    

    //need to figure out this @#O)OEFH)@ cookie
    console.log(req.cookies);

    console.log("this worked");

    var id;

    db.User.findOne({
      where:{
        // identity: req.cookies
        id:1
        }
      }).then(function(data){
        // id = data;
        console.log("data id: "+data.id);
        id = data.id;
        console.log("this is ID: "+id);

        db.User.findAll({

          include:[
            {
              model:db.Item,
              require:false
            }
          ],
            where:{
              id:id
            }

          }).then(function (data) {
            console.log("this is Item"+data[0].Items);
            var hbsObject = {
              // kitty: data.Item
              kitty: data[0].Items
            }; 
            res.render("collection", hbsObject);
          });

    });

    

  });




    // app.get("/api/collection/:id",function(req,res){

    // console.log(req.params.id);
        
    //     db.User.findAll({
    //     // attributes:["id"],
    //       include:[
    //           {
    //           model:db.Item,
    //           require:false
    //     //     attributes: ["id"]
    //           }
    //       ],
    //       where:{id:req.params.id}
    //     }).then(function(data){
          
    //       res.json(data);
    //   });

    // });



    app.get("/login-page", function(req, res){
        res.render("login-page");
    });
    
    app.get("/admin", function (req, res) {
      db.Item.findAll({}).then(function (data) {
        var hbsObject = {
          kitty: data
        }; 
        res.render("admin-cats", hbsObject);
      });
    });

    app.get("/api/leaderboard", function (req, res) {
      db.User.findAll({}).then(function (data) {
        var hbsObject = {
          leaders: data
        }; 
        res.json(hbsObject);
      });
    });
  };

  //NEED TO WORK OUT COIN COUNT CODE//
  // app.get("/*", function (req, res) {
  //   db.User.findOne({}).then(function (data) {
  //     var coinCount = {
  //       coins: data.coin_count
  //     }; 
  //     res.render("/*", coinCount);
  //   });
  // });

