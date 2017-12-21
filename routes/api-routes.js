var Sequelize = require('sequelize');
var db = require("../models");
var randtoken = require("rand-token");

module.exports = function (app) {

	//Post request to creat new item in database from admin page
	app.post("/admincreate", function(req, res) {
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

	//Delete request to destroy item in database by id/button
	app.delete("/admin/:id", function(req, res) {
		db.Item.destroy({
			where: {
				id: req.params.id
			}
		}).then(function () {
			res.end();
		});//Destroy Function Close
	});//Delete Function Close

	//Put request to update a user's coin count after buying loot boxes
	app.put("/api/updateCoin", function(req, res){
	    db.User.update({
			coin_count: req.body.coin
	    }, {
			where: {
				user_name: req.body.username
			}
		}).then(function(dbPost) {
			res.end();
	    });//then
	});//post

	//Put request to change points in database after opening lootbox
	app.put("/api/addPoints", function(req, res){
		db.User.update({
			points: req.body.points
		}, {
			where: {
				user_name: req.body.username
			}
		}).then(function(dbPost) {
			res.end();
		});//then
	});//post

	//EH UNFINISHED ATTEMPT AT UPDATE BUTTON ON ADMIN PAGE
	app.put("/api/updateItem/:id", function(req, res){
		db.Items.update({
			tier: req.body.tier
		}, {
			where: {
				id: req.params.id
			}
		}).then(function(dbPost) {
			res.end();
		});//then
	});//post

};//Page function close
