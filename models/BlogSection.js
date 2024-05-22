const mongoose = require("mongoose")

const blogsectionSchema = new mongoose.Schema({
    imageTitle: String,
    date: String,
    heading: String,
    name: String,
    content: String,
    imageSrc: String,
    profilePic: String,
    displayOnPage: Boolean
});

module.exports = mongoose.model("BlogSection",blogsectionSchema);