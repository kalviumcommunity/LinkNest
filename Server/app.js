const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
//cors is a middleware that allows cross-origin requests. It enables the server 
// to accept requests from different origins, which is essential for frontend 
// applications that may be hosted on a different domain than the backend server.
app.use(express.json());

const linkRoutes = require("./routes/linkRoutes");

app.use("/api/links", linkRoutes);

module.exports = app;