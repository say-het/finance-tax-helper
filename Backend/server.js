const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectToMongo = require("./database"); // Import MongoDB connection function
const userRoutes = require("./routes/user"); // Import user routes
const fetchdata  = require("./routes/fetchdata"); // Import fetch data routes
const adddata  = require("./routes/adddata"); // Import fetch data routes
// const Individual = require("./models/Individual.model"); // Import Individual model
// const router = express.Router();
dotenv.config(); // Load environment variables

// Connect to MongoDB
connectToMongo();

const app = express();

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

// API Routes
app.use("/api/auth", userRoutes); // Use the user routes for the '/api/auth' endpoint
app.use("/api/fetch", fetchdata);
app.use("/api/add", adddata);

// Start server

const port = process.env.PORT || 7000; // Use port from environment variables or default to 7000
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
// module.exports = router;
