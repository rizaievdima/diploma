const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const { page = 1, pageSize = 9 } = req.body;

    const start = (page - 1) * pageSize;
    const end = start + parseInt(pageSize, 10);
    const paginatedHotels = db.hotels.slice(start, end);

    res.send({ hotels: paginatedHotels, total: db.hotels.length });
});

router.get("/:id", (req, res) => {
    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    const hotel = db.hotels.find((hotel) => hotel.id === parseInt(req.params.id));
    if (!hotel) return res.status(404).json({ message: "Hotel not found" });
    res.send(hotel);
});

module.exports = router;
