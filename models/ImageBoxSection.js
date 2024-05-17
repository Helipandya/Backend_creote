const mongoose = require("mongoose")

const imageBoxSection = new mongoose.Schema({
    link: String,
    imageSrc: String,
    title: String,
    subTitle: String,
    content: String,
    year: String,
    percentage: String,
    percentageTitle : String,
    percentageContent : String,
    startYear: String,
    operating: String,
    logo: String,
    displayOnPage: Boolean,
});

module.exports = mongoose.model("ImageBoxSection", imageBoxSection);