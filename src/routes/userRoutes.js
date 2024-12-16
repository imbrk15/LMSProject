const express = require("express");
const router = express.Router();
const User = require("../backend/models/User"); // Import User model

// Test Route
router.get("/test", (req, res) => {
  res.json({ message: "API is working!" });
});

// Fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
});

// Add a new user
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating user", error: err.message });
  }
});

module.exports = router;
