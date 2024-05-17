const ImageBox = require("../models/ImageBoxSection");

const getSpecificImageBox = async (req, res) => {
    try {
        const imageBox = await ImageBox.find({ displayOnPage: true}).limit(1);
        res.json(imageBox);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getImageBox = async (req, res) => {
    try{
        const imageBox = await ImageBox.find();
        res.json(imageBox);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const postImageBox = async (req, res) => {
    try{
        const newimageBox = await ImageBox.create(req.body);
        res.status(201).json({ message: "ImageBox Section Data Add.", data: newimageBox});
    } catch (error) {
        console.error("Error Creating ImageBox Section Data", error);
        res.status(500).json({ error: "Failed to ImageBox Section Data"});
    }
};

const putImageBoxById = async (req, res) => {
    let result = await ImageBox.updateOne(
        { _id: req.params.id },
        {
            $set: req.body,
        }
    );
    res.send(result);
};

const getImageBoxById = async (req, res) => {
    let result = await ImageBox.findOne({ _id: req.params.id });
    if (result) {
        res.send(result);
    } else {
        res.send({ result: "No Record Found."})
    }
};

const deleteImageBoxById = async (req, res) => {
    const result = await ImageBox.deleteOne({ _id: req.params.id });
    res.send(result);
};

module.exports = {
    getImageBox,
    getSpecificImageBox,
    getImageBoxById,
    postImageBox,
    putImageBoxById,
    deleteImageBoxById
}