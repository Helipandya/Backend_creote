const Logo = require("../models/Logo.js");

const getSpecificLogo = async (req, res) => {
    try {
        const logo = await Logo.find({ displayOnPage: true}).limit(5);
        res.json(logo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getLogo = async (req, res) => {
    try{
        const logo = await Logo.find();
        res.json(logo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postLogo = async (req, res) => {
    try {
        const newlogo = await Logo.create(req.body);
        res.status(201).json({ message: "Logo Add.", data: newlogo});
    } catch (error) {
        console.error("Error Creating Logo", error);
        res.status(500).json({ error: "Failed to Create Logo" });
    }
};

const putLogoById = async (req, res) => {
    let result = await Logo.updateOne(
        { _id: req.params.id },
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const getLogoById = async (req, res) => {
    let result = await Logo.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found." });
    }
};

const deleteLogoById = async (req, res) => {
    const result = await Logo.deleteOne({ _id: req.params.id });
    res.send(result);
};

module.exports = {
    getLogo,
    getLogoById,
    getSpecificLogo,
    postLogo,
    putLogoById,
    deleteLogoById,
}