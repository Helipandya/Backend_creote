const AdminUser = require("../models/AdminUser");
const bcrypt = require("bcryptjs");
const postLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const user = await AdminUser.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Login successful
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const postRegister = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await AdminUser.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const newUser = new AdminUser({ email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const postLogOut = async (req, res) => {
  // Perform logout logic here (e.g., clear session data, revoke tokens, etc.)
  // For example, if using session-based authentication:
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ error: "Failed to logout" });
    }
    res.clearCookie("session-id"); // Clear the session cookie if using cookies
    res.json({ message: "Logout successful" });
  });
};

module.exports = { postLogin, postRegister, postLogOut };
