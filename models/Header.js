const mongoose = require("mongoose");

const headerSchema = new mongoose.Schema({
    location: String,
    email: String,
    phone: String,
    displayOnPage: Boolean,
});

module.exports = mongoose.model("Header", headerSchema);