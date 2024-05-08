const mongoose = require("mongoose")

const customerservicesectionSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageSrc: String,
    displayOnPage: Boolean
});

module.exports = mongoose.model("CustomerServiceSection",customerservicesectionSchema);