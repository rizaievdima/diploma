const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const hotels = db.hotels.filter((hotel) => {
        return hotel.featured === true;
    });
    if (!hotels) return res.status(404).json({ message: "Featured hotel not found" });
    res.send(hotels);
});
module.exports = router;
