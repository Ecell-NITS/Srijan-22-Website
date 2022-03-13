const express = require("express");
const { get } = require("express/lib/response");
const { getIndexPage, getEventPage, getLaunchPage } = require("../controllers/getIndexPage");

const router = express.Router();

router.get("/", getLaunchPage); // serves index page
// router.get("/events", getEventPage); // serves event page
// router.get("/LaunchPage" , getLaunchPage); // serves lauch page
module.exports = router;