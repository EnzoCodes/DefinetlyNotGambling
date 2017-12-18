var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  // app.get("/admin", function (req, res) {
  //   res.render("admin-cats");
  // });

  app.get("/home", function (req, res) {
    res.render("index");
  });

  app.get("/api/open", function (req, res) {
    res.render("open-pack");
  });

  app.get("/loot", function (req, res) {
    res.render("open-pack");
  });

  //NEED TO EDIT CODE TO REFLECT A USER SEPCIFIC COLLECTION ONCE WE DO THAT LOGIC//
  app.get("/collection/:id", function (req, res) {
    
    
    var identity = req.params.identity;

    console.log(identity);

    var id; 

    db.User.findOne({
      where:{
        identity:req.params.identity
        // id:3
        }
      }).then(function(data){
        // id = data;
        // console.log("data id: "+data.id);
        id = data.id;
    });


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
      var hbsObject = {
        // kitty: data.Item
        kitty: data.Items
      }; 
      // res.render("collection", hbsObject);
      res.json(hbsObject);
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
