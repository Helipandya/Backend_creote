const Users = require("../models/Users.js");

const getSpecificSlider = async (req, res) => {
  try {
    const users = await Users.find({ displayOnPage: true }).limit(3);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getSlider = async (req, res) => {
  try {
    const users = await Users.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const postSlider = async (req, res) => {
  try {
    const newslider = await Users.create(req.body);
    res.status(201).json({ message: "Slider Data Created", data: newslider });
  } catch (error) {
    console.error("Error creating Slider Data", error);
    res.status(500).json({ error: "Failed to create Slider Data" });
  }
};

const putSlidersById = async (req, res) => {
  let result = await Users.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
};

const deleteSliderById = async (req, res) => {
  const result = await Users.deleteOne({ _id: req.params.id });
  res.send(result);
};

const getSliderById = async (req, res) => {
  let result = await Users.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Found." });
  }
};
module.exports = {
  getSlider,
  putSlidersById,
  getSpecificSlider,
  deleteSliderById,
  getSliderById,
  postSlider,
};
