const express = require("express");
const router = express.Router();

const { getAllLinks } = require("../controllers/linkController");

router.get("/", getAllLinks);
//router.get("/", getAllLinks) defines a route for the GET method at the root path ("/") of the links API.

module.exports = router;