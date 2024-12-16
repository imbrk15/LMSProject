const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load environment variables

const userRoutes = require("../routes/userRoutes");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Atlas Connection
const mongoURI = process.env.MONGO_URI;
if (!mongoURI) {
  console.error("Error: MONGO_URI is not defined in .env file.");
  process.exit(1);
}

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Routes
app.use("/api/users", userRoutes);

// Test endpoint
app.get("/", (req, res) => {
  res.send("Server is running...");
});

// Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Global error handler
app.use((err, req, res, next) => {
  console.error("Internal server error:", err.message);
  res
    .status(500)
    .json({ message: "Something went wrong!", error: err.message });
});
