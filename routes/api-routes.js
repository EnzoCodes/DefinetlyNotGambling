var Sequelize = require('sequelize');
var db = require("../models");
var randtoken = require("rand-token");

module.exports = function (app) {

	app.post("/admincreate", function (req, res) {
		db.Item.create({
			name: req.body.name,
			house: req.body.house,
			houseImage: req.body.houseImage,
			tier: req.body.tier,
			image: req.body.image
		}).then(function () {
			res.end();
		});//Create Function Close
	});//Post Function Close

	app.delete("/admin/:id", function(req, res) {

		console.log(req.params.id);
		db.Item.destroy({
			where: {
				id: req.params.id
			}
		}).then(function () {
			res.end();
		});//Destroy Function Close
	});//Delete Function Close


	app.get("/api/open", function (req, res) {
		var items = [];
		var tierChoice = [];

		function packopen() {

			for (var i = 0; i < 3; i++) {
				var num = Math.random();

				if (num < 0.1) {
					tierChoice.push(1);
				}
				else if (num < 0.3) {
					tierChoice.push(2);
				}
				else if (num < 0.6) {
					tierChoice.push(3);
				}
				else {
					tierChoice.push(4);
				}
			}
		}

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
					res.json(newPack);
				});
			});
		});
	});


	app.put("/api/addCoin", function(req, res){

	    db.User.update({
			coin_count: req.body.coin
	    }, {
			where: {
				user_name: req.body.username
			}
		}).then(function(dbPost) {
			res.end();
	    });

	  });


	  app.put("/api/removeCoin", function(req, res){

		  db.User.update({
			  coin_count: req.body.coin
		  }, {
			  where: {
				  user_name: req.body.username
			  }
		  }).then(function(dbPost) {
			  res.end();
		  });

		});



};//Main Function Close
