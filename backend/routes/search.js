const express = require("express");
const router = express.Router();
const fs = require("fs");

router.post("/", (req, res) => {
    const { destinationId, query = "" } = req.body;

    const db = JSON.parse(fs.readFileSync("db.json", "utf-8"));

    const destination = db.destination.find((d) => d.id === destinationId);
    if (!destination) return res.status(404).json({ message: "Destination not found" });

    const results = db.hotels.filter(
        (c) =>
            c.city === destination.label &&
            (c.address.toLowerCase().includes(query.toLowerCase()) ||
                c.name.toLowerCase().includes(query.toLowerCase()))
    );

    res.json(results);
});

module.exports = router;
