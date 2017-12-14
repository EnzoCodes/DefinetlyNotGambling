var Sequelize = require('sequelize');
var db = require("../models");
var randtoken = require("rand-token");

// var token = randtoken.generator(["source "]);


module.exports = function(app) {


	app.get("/api/open", function(req,res){
		var items= [];
		var tierChoice =[];


		// console.log("this is token: "+JSON.stringify(token));

		function packopen(){

			for(var i = 0;i<3;i++){
				
				var num = Math.random();

				if(num < 0.1){
					tierChoice.push(1);
				}
				else if(num < 0.3){
				tierChoice.push(2);
				}
				else if(num < 0.6){
				tierChoice.push(3);
				}
				else {
				tierChoice.push(4);
				}
			}
		}

		packopen();

		db.item.findOne({
			order: [[Sequelize.literal('RAND()')]],
			where: {
				tier:tierChoice[0]
			}
		}).then(function(data1){
			items.push(data1);
			

			db.item.findOne({
				order: [[Sequelize.literal('RAND()')]],
				where: {
					tier:tierChoice[1]
				}
			}).then(function(data2){
				items.push(data2);

					db.item.findOne({
						order: [[Sequelize.literal('RAND()')]],
						where: {
							tier:tierChoice[2]
						}
					}).then(function(data3){
						items.push(data3);
						res.json(items);

				});

			});
			
		});	

	});


};