//Dependencies
const express = require("express");
const path = require("path");
//const routes = require("./controller");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const sequelize = require("./config/connection");

//Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//Sets Handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

//Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(path.join(__dirname, "public")));
//app.use(routes);

// Starts the server
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
