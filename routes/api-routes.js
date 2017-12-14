var db = require("../models");




module.exports = function(app) {

app.post("/admin", function(req, res) {
    //console.log(req.body); 
   db.Item.create({
        name: req.body.name, 
        movie: req.body.movie, 
        type: req.body.type, 
        category: req.body.category, 
        tier: req.body.tier, 
        image: req.body.image

   }).then(function(){
    res.end(); 
   });
      
  });

};