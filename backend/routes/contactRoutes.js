const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST: save message
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const saved = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Message saved ✅", data: saved });
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

// GET: view all messages (for testing)
router.get("/", async (req, res) => {
  try {
    const all = await Contact.find().sort({ createdAt: -1 });
    res.json(all);
  } catch (err) {
    res.status(500).json({ error: "Server error", details: err.message });
  }
});

module.exports = router;
