const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  heading: String,
  title: String,
  description: String,
  displayOnPage: Boolean,
  imageSrc: String,
  sliderImg: String,
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
