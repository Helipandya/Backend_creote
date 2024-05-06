const mongoose = require("mongoose");

const teamMemberSchema = new mongoose.Schema({
  name: String,
  role: String,
  imageSrc: String,
  displayOnPage: Boolean,
  order: Number,
});

module.exports = mongoose.model("TeamMember", teamMemberSchema);
