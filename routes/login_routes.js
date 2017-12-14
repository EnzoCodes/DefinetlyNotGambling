var db = require("../models");

module.exports = function(app) {


    //Make button that hits this route upon 'log-in' button
    app.get("/login", function(req, res){
        var token = randtoken.generate(16);
        db.User.update({
            token: token
        }, {
            where: {
                user_name: req.body.user_name,
                password: req.body.password
            }
        }).then(function(dbRes) {

            res.json(dbRes);
        });
    });

    //Already logged in!?
    app.post("/", function(req, res){
        db.User.findOne({
            where: {
                token: req.body.token
            }
        }).then(function(dbRes) {
            res.json(dbRes);
        });
    });

    //Sign-up button logic...
    app.post("/register", function(req, res) {
        db.User.create({
            user_name: req.body.user_name,
            password: req.body.password,
            coin_count: 100,
            identity: ""
        }).then(function(dbRes){
            res.json(dbRes);
        });
    });

};

exports.register

//On document ready we make post request. Sendtken. If it's not there, clear it.
// On evey page we do a get requet for the identity and the user info.
