//jshint esversion:6

//requiring pakages
const dotenv = require("dotenv");
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const Routes = require("./routes/routes");
dotenv.config();
const connectToMongo = require('./db')
connectToMongo();

const APP_PORT = process.env.PORT || 8000;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.use("/", Routes);
app.use((req, res, next) => {
    res.status(404).render("error");
})

//listen to the port 3000
app.listen(APP_PORT, function() {
    console.log("Server is running in port 3000");
});