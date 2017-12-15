var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {


          //  console.log(hbsObject);
            //console.log(hbsObject);
            //res.render("partials/profile_page", hbsObject);
            res.render("mainp");
            // We have access to the todos as an argument inside of the callback function

          });
        // res.render("index")

    app.get("/register", function(req, res) {


          //  console.log(hbsObject);
            //console.log(hbsObject);
            //res.render("partials/profile_page", hbsObject);
            res.render("mainp");
            // We have access to the todos as an argument inside of the callback function

          });



        // app.get("/login", function(req, res) {


        //             //  console.log(hbsObject);
        //               //console.log(hbsObject);
        //               //res.render("partials/profile_page", hbsObject);
        //               res.render("login_page");
        //               // We have access to the todos as an argument inside of the callback function

        //             });

        app.get("/admin", function(req, res) {


                    //  console.log(hbsObject);
                      //console.log(hbsObject);
                      //res.render("partials/profile_page", hbsObject);
                      res.render("admin");
                      // We have access to the todos as an argument inside of the callback function

                    });

    app.get("/profile", function(req, res) {
        console.log(req.body);
        db.Item.findAll({}).then(function(data) {
            var hbsObject ={
              monsters: data
            };
          //  console.log(hbsObject);
            //console.log(hbsObject);
            //res.render("partials/profile_page", hbsObject);
            res.render("index", hbsObject);
            // We have access to the todos as an argument inside of the callback function

          });
        // res.render("index")
      });

    app.get("/login-page", function(req, res){
        res.render("login-page");
    })

};
