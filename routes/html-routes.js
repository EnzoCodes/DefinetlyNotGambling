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
    console.log("this is backend cookie"+req.cookies.identity);
    console.log("this worked");
    var id;

    db.User.findOne({
      where:{
        identity: req.cookies.identity
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
            console.log("this is Item" + JSON.stringify(data[0].Items));
            var stark = [];
            var lannister = [];
            var targaryen = [];
            var baratheon = [];
            var martell = [];
            var tyrell = [];
            var wildlings = [];
            var nightswatch = [];
            var warriors = [];
            var smallCouncil = [];
            var other = [];
            var cat = [];
            var direwolves = [];

            for (var i = 0; i < data[0].Items.length; i++) {
              if (data[0].Items[i].house === "Stark"){
                stark.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Lannister"){
                lannister.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Targaryen"){
                targaryen.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Baratheon"){
                baratheon.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Martell"){
                martell.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Tyrell"){
                tyrell.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Wildlings"){
                wildlings.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Nightswatch"){
                nightswatch.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Warriors of Westeros"){
                warriors.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Small Council"){
                smallCouncil.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Other"){
                other.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Direwolves"){
                direwolves.push(data[0].Items[i]);
              }
              else if (data[0].Items[i].house === "Cat"){
                cat.push(data[0].Items[i]);
              }

            }
            var hbsObject = {
              // kitty: data.Item
              kitty: {stark: stark,
                 lannister:lannister,
                 baratheon:baratheon,
                 targaryen:targaryen,
                 warriors: warriors,
                 direwolves:direwolves,
                 cat:cat,
                 martell:martell,
                 tyrell:tyrell,
                 targaryen:targaryen,
                 nightswatch:nightswatch,
                 other:other,
                 smallCouncil:smallCouncil,
                 wildlings:wildlings
                      }
            };
            //console.log(hbsObject);
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
