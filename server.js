var express = require("express");
var bodyParser = require("body-parser");
var login = require("./routes/login_routes");
var db = require("./models");

var PORT = process.env.PORT || 8080;
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));
//require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);
// require("./routes/login_routes.js")(app);

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//Maybe move below to login_routes...
var router = express.Router();

//test
router.get('/', function(req, res){
    res.json({ message: 'Login route api get request'} );
});

//user registration
router.post('/register', login.register);
router.post('/login', login.login)
app.use('/api', router);

//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

db.sequelize.sync({}).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
