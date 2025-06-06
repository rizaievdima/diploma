const express = require("express");
const cors = require("cors");

const app = express();

const hotelsRouter = require("./routes/hotels");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Server!");
});

app.use("/hotels", hotelsRouter);

module.exports = app;
