const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  heading: String,
  title: String,
  description: String,
  displayOnPage: Boolean,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
