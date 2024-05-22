const mongoose = require("mongoose");

const testimonialSectionSchema = new mongoose.Schema({
  imageSrc: String,
  name: String,
  position: String,
  content: String,
  displayOnPage: Boolean,
});

module.exports = mongoose.model("TestimonialSection", testimonialSectionSchema);
