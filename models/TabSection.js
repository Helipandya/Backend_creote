const mongoose = require("mongoose");

const tabSectionSchema = new mongoose.Schema({
  imageSrc: String,
  title: String,
  heading: String,
  subHeading: String,
  content: String,
  displayOnPage: Boolean,
});

module.exports = mongoose.model("TabSection", tabSectionSchema);
