const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToMongo = require("./database"); // Import MongoDB connection function
const userRoutes = require("./routes/user"); // Import user routes

dotenv.config(); // Load environment variables

// Connect to MongoDB
connectToMongo();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/auth", userRoutes); // Use the user routes for the '/api/auth' endpoint

// Start server
const port = process.env.PORT || 7000; // Use port from environment variables or default to 7000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
