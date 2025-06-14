const express = require("express");
const cors = require("cors");

const app = express();

const hotelsRouter = require("./routes/hotels");
const destinationsRouter = require("./routes/destinations.js");
const searchRoutes = require("./routes/search.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Server!");
});

app.use("/destinations", destinationsRouter);
app.use("/hotels", hotelsRouter);

app.use("/search", searchRoutes);

module.exports = app;
