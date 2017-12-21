var db = require("../models");
var cookieParser = require("cookie-parser");
var Sequelize = require('sequelize');
var randtoken = require("rand-token");

module.exports = function (app) {

  //Render login page at start
  app.get("/", function (req, res) {
    res.render("login-page");
  });

  //Render login-page at register
  app.get("/register", function (req, res) {
    res.render("login-page");
  });

  //render open-pack handlebar page/home page after login
  app.get("/home", function (req, res) {
    res.render("open-pack");
  });

  //
  app.get("/api/open", function (req, res) {
    res.render("open-pack");
  });

  //render open-pack handle bars after a chest has been purchased
  app.get("/loot", function (req, res) {
    res.render("open-pack");
  });

  //Gets the user opened items from the database and sorts them into objects to send to collection handlebar page
  app.get("/collection", function (req, res) {
    var id;
    //Requests user specific data from the Users table with cookies/token
    db.User.findOne({
      where:{
        identity: req.cookies.identity
        }
      }).then(function(data){
        id = data.id;

        //Requests all data from the items table that the user has opened
        db.User.findAll({
          include:[
            {
              model:db.Item,
              require:false
            }
          ],
            where: {
              id:id
            }
          }).then(function (data) {

            //Create empty arrays for each house/class
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

            //Loop through the list of the users items, and push to empty arrays according to house data column
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
            }//forloop

            //Create an object with the house arrays and send it as JSON & render the collection handlebar page
            var hsObject = {
              house: {data:data, stark: stark,
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
           
              res.render("collection", hsObject);
          });
    });

  });//Get request


  app.get("/login-page", function(req, res){
    res.render("login-page");
  });

  //Sends all data from items table as an object and renders admin page
  app.get("/admin", function (req, res) {
    db.Item.findAll({}).then(function (data) {
      var charObject = {
        character: data
      };
      res.render("admin", charObject);
    });
  });

  //
  app.get("/api/leaderboard", function (req, res) {
      db.User.findAll({
        include:[
          {
            model:db.Item,
            require:false
          }
        ],
        order: [
        ["points", "DESC"]
        ]
      }).then(function (data) {
        var tier4 = [];
        var tier3 = [];
        var tier2 = [];
        var tier1 = [];
        var tierall = [];
        for (var i = 0; i < data[0].Items.length; i++) {
          tierall.push(data[0].Items[i]);
            //console.log(tierall); 
          if (data[0].Items[i].tier === 4){
            tier4.push(data[0].Items[i]);
           // tierall.push(data[0].Items[i]);
            //console.log(tierall); 
          }
          else if (data[0].Items[i].tier === 3){
            tier3.push(data[0].Items[i]);
           // tierall.push(data[0].Items[i]);
            //console.log(tierall); 
          }
          else if (data[0].Items[i].tier === 2){
            tier2.push(data[0].Items[i]);
            //tierall.push(data[0].Items[i]);
           //console.log(tierall); 
          }
          else if (data[0].Items[i].tier === 1){
            tier1.push(data[0].Items[i]);
            //tierall.push(data[0].Items[i]);
            //console.log(tierall); 
          }
        }
        var hbsObject = {
          leaders: [{
            data:data,
            tierall:tierall,
            tier4:tier4,
            tier3:tier3,
            tier2:tier2,
            tier1:tier1
          }]
  
        };
        res.json(hbsObject);
      });
    });


    app.get("/collection/:id", function (req, res) {
      console.log(req.params.id);
      db.User.findOne({
        where:{
          id: req.params.id
          }
        }).then(function(data){
          // id = data;
         // console.log("data id: "+data.id);
          id = data.id;
          //console.log("this is ID: "+id);
  
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
             // console.log("this is Item" + JSON.stringify(data[0].Items));
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
                kitty: {data:data, stark: stark,
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





	app.get("/api/open/:identity", function (req, res) {
		var items = [];
		var tierChoice = [];

		function packopen() {

			for (var i = 0; i < 3; i++) {
				var num = Math.random(4);

				if (num < 0.05) {
					tierChoice.push(4);
				}
				else if (num < 0.15) {
					tierChoice.push(3);
				}
				else if (num < 0.2) {
					tierChoice.push(2);
				}
				else {
					tierChoice.push(1);
				}
			}
		}

		var identity = req.params.identity;

		//console.log(identity);

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

		packopen();

		db.Item.findOne({
			order: [[Sequelize.literal('RAND()')]],
			where: {
				tier: tierChoice[0]
			}
		}).then(function (data1) {
			items.push(data1);

			db.Item.findOne({
				order: [[Sequelize.literal('RAND()')]],
				where: {
					tier: tierChoice[1]
				}
			}).then(function (data2) {
				items.push(data2);

				db.Item.findOne({
					order: [[Sequelize.literal('RAND()')]],
					where: {
						tier: tierChoice[2]
					}
				}).then(function (data3) {
					items.push(data3);
					// res.json(items);
					var newPack = {
						list: items
					};
					// console.log(newPack.list[0].id);

					for(var i = 0;i<newPack.list.length;i++){
						// closure function to make sure i++ waits for create to finish
						// (function(i){})(i);
						//console.log("id: "+newPack.list[i].id);

						db.user2items.create({
							ItemId:newPack.list[i].id,
							UserId: id
						}).then(function(data){
							// console.log(data);
						});


					}
					// console.log(newPack);
					res.json(newPack);

				});
			});
		});
	});


	app.get("/api/bought",function(req,res){
		db.user2items.findAll({})
		.then(function(data){
			res.json(data);
		});
	});

	
  };

