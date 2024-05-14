const mongoose = require("mongoose");

const logoSchema = new mongoose.Schema({
  imageSrc: String,
  displayOnPage: Boolean,
});

module.exports = mongoose.model("Logo", logoSchema);
