const Tab = require("../models/TabSection");

const getSpecificTab = async (req, res) => {
    try {
        const logo = await Tab.find({ displayOnPage: true}).limit(5);
        res.json(logo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getTab = async (req, res) => {
    try{
        const logo = await Tab.find();
        res.json(logo);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postTab = async (req, res) => {
    try {
        const newTab = await Tab.create(req.body);
        res.status(201).json({ message: "Tab Section Data Add.", data: newTab});
    } catch (error) {
        console.error("Error Creating Tab Section Data", error);
        res.status(500).json({ error: "Failed to Create Tab Section Data" });
    }
};

const putTabById = async (req, res) => {
    let result = await Tab.updateOne(
        { _id: req.params.id },
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const getTabById = async (req, res) => {
    let result = await Tab.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found." });
    }
};

const deleteTabById = async (req, res) => {
    const result = await Tab.deleteOne({ _id: req.params.id });
    res.send(result);
};

module.exports = {
    getTab,
    getTabById,
    getSpecificTab,
    postTab,
    putTabById,
    deleteTabById,
}