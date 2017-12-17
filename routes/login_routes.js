var db = require("../models");
var Sequelize = require('sequelize');
var randtoken = require("rand-token");

module.exports = function(app) {


    //Log-in logic...
    app.post("/logAttempt", function(req, res){

        db.User.findOne({
            where: {
                user_name: req.body.user_name,
                password: req.body.password
            }
        }).then(function(dbRes) {
            if (dbRes === null){
                res.json(dbRes);
            } else {
                var token = randtoken.generate(16);
                //Update DB with new token on matching USER/PASS
                db.User.update({
                    token: token
                }, {
                    where: {
                        user_name: req.body.user_name,
                        password: req.body.password
                    }
                }).then(function(dbRes) {
                    //Return logged in user data...unfortunately including password.
                    res.json(dbRes);
                })
            }
        })
    });

    //Already logged in!?
    // Make the / route hit our main page...or not...
    app.post("/", function(req, res){
        db.User.findOne({
            where: {
                token: req.body.token
            }
        }).then(function(dbRes) {
            res.json(dbRes);
        })
    });


    //Sign-up Logic...
    app.post("/register", function(req, res) {
        var token = randtoken.generate(16);
        db.User.create({
            user_name: req.body.user_name,
            password: req.body.password,
            coin_count: 100,
            identity: token
        }).then(function(dbRes){
            res.json(dbRes);
        })
    });

    //Duplicate user logic...
    app.get("/duplicate/:userName", function(req, res) {
        db.User.findAll({
            where: {
                user_name: req.params.userName
            }
        }).then(function(dbRes) {
            res.json(dbRes);
        })
    });

    //End Sign-up Logic.

}; //


//On document ready we make post request. Sendtken. If it's not there, clear it.
// On evey page we do a get requet for the identity and the user info.
