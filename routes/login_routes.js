var db = require("../models");

module.exports = function(app) {


    //Make button that hits this route upon successfull login attempt.
    // HTML routes - Should direct to main page if success.
    app.get("/loggedIn", function(req, res){
        //Generate Token
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
        });
    });

    //Already logged in!?
    // Make the / route hit our main page.
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
    // HTML routes - Should push us to main page if /existingUser check is passed.
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

    //Already in our database!?
    // HTML routes -  Should keep us on the login page.
    app.post("/dupeUser", function(req, res) {
        db.User.findAll({
            where: {
                user_name: req.body.user_name
            }
        }).then(function(dbRes) {
            //Make this response, if(null){continue login logic}
            res.json(dbRes);
        })
    });

};

exports.register

//On document ready we make post request. Sendtken. If it's not there, clear it.
// On evey page we do a get requet for the identity and the user info.
