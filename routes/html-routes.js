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
  


    app.get("/profile", function(req, res) {
        console.log(req.body);
        db.item.findAll({}).then(function(data) {
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

};