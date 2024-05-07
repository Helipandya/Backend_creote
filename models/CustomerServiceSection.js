const mongoose = require("mongoose")

const customerservicesectionSchema = new mongoose.Schema({
    title: String,
    content: String,
    imageSrc: String
});

module.exports = mongoose.model("CustomerServiceSection",customerservicesectionSchema);