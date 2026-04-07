const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ MongoDB connect
const MONGO_URI =
  process.env.MONGO_URI || "mongodb://127.0.0.1:27017/portfolioDB";

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch((err) => console.log("Mongo error:", err));

// ✅ Schema + Model
const contactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    message: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", contactSchema);

// ✅ API routes
app.get("/api/contact", async (req, res) => {
  const data = await Contact.find().sort({ createdAt: -1 });
  res.json(data);
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const saved = await Contact.create({ name, email, message });
    res.status(201).json({ message: "Saved ✅", data: saved });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Serve React frontend build
const frontendPath = path.join(__dirname, "../frontend/build");
app.use(express.static(frontendPath));

// ✅ Catch-all: send React's index.html for any non-API route
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));