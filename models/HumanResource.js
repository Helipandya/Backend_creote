const mongoose = require("mongoose");

const humanresourceSchema = new mongoose.Schema({
  title: String,
  content: String,
});

module.exports = mongoose.model("HumanResource", humanresourceSchema);
