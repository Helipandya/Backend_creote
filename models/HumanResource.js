const mongoose = require("mongoose");

const humanresourceSchema = new mongoose.Schema({
  title: String,
  content: String,
  displayOnPage: Boolean
});

module.exports = mongoose.model("HumanResource", humanresourceSchema);
