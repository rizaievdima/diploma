const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
    const { destinationId = null, query = "", page = 1, pageSize = 9 } = req.body;

    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));
    let results = [];

    if (!destinationId) {
        results = db.hotels.filter(
            (c) =>
                c.address.toLowerCase().includes(query.toLowerCase()) ||
                c.name.toLowerCase().includes(query.toLowerCase())
        );
    } else {
        const destination = db.destination.find((d) => d.id === destinationId);
        if (!destination) return res.status(404).json({ message: "Destination not found" });

        results = db.hotels.filter(
            (c) =>
                c.city === destination.label &&
                (c.address.toLowerCase().includes(query.toLowerCase()) ||
                    c.name.toLowerCase().includes(query.toLowerCase()))
        );
    }

    const total = results.length;

    const start = (page - 1) * pageSize;
    const end = start + parseInt(pageSize, 10);
    const paginatedHotels = results.slice(start, end);

    res.json({ hotels: paginatedHotels, total });
});

module.exports = router;
