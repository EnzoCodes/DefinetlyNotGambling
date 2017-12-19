var express = require("express");
var bodyParser = require("body-parser");
var login = require("./routes/login_routes");
var db = require("./models");
var logger = require("morgan");
var randtoken = require("rand-token");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/login_routes.js")(app);

app.use(logger('dev'));

db.sequelize.sync({ }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
