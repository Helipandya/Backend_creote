const mongoose = require("mongoose");

const adminUserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // Add any additional fields as needed
});

module.exports = mongoose.model("AdminUser", adminUserSchema);
