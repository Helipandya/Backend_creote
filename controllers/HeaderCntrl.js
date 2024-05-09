const Header = require("../models/Header");

const getheader = async (req, res) => {
    try {
        // console.log("Fetching data...");
        const content = await Header.find();
        // console.log("Fetched content:", content);
        res.json(content);
    } catch(error) {
        console.error("Error fetching Content:", error);
        res.status(500).json({ error: error.message });
    }
};

const getspecificheader = async (req, res) => {
    try {
        // console.log("Fetching data...");
        const content = await Header.find({
            displayOnPage: true,
        }).limit(1);
        // console.log("Fetched content:", content);
        res.json(content);
    } catch(error) {
        console.error("Error fetching Content:", error);
        res.status(500).json({ error: error.message });
    }
};

const postheader = async (req, res) => {
    try{
        const newheader = await Header.create(req.body);
        res
            .status(201)
            .json({ message: "Header Data Created", data: newheader});
    } catch (error) {
        console.error("Error creating Header Data", error);
        res.status(500).json({ error: "Failed to create Header Data"});
    }
};

const getheaderById = async (req, res) => {
    let result = await Header.findOne({ _id: req.params.id});
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found."});
    }
};

const putheaderById = async (req, res) => {
    let result = await Header.updateOne(
        { _id: req.params.id },
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const deleteheaderById = async (req, res) => {
    const result = await Header.deleteOne({ _id: req.params.id });
    res.send(result);
}

module.exports = {
    getheader,
    getspecificheader,
    postheader,
    getheaderById,
    putheaderById,
    deleteheaderById
}