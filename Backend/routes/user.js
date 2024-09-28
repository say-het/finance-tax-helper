const express = require("express");
const User = require("../models/UserCredentials.model");
const { body, validationResult } = require('express-validator'); // Re-enable input validation
const router = express.Router();

// createUser route
router.post(
  "/createuser",
  [
    body('email', 'Enter a valid email').isEmail(), // Email validation
    body('name', 'Name must be at least 2 characters long').isLength({ min: 2 }), // Name validation
    body('age', 'Age must be a number').isNumeric(), // Age validation
    body('password', 'Password must be at least 6 characters long').isLength({ min: 6 }) // Password validation
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);

    // If there are validation errors, return them
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, error: errors.array()[0].msg });
    }

    try {
      // Check if a user with the same email already exists
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({
          success,
          error: "Sorry, a user already exists with this email"
        });
      }

      // Create a new user
      user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
      });
      
      await user.save(); // Save user to MongoDB

      success = true;
      res.json({ success, user }); // Return success and user data
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
