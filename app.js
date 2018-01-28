var express = require("express");
var app = express();
var todoController = require("./controllers/todoController")(app);

//set up template engine
app.set("view engine", "ejs");

//static files
app.use(express.static("./public"))

//listen to port
app.listen(5000);
console.log("You are listening to port 5000");
