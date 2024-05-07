const HumanResource = require("../models/HumanResource.js");

const gethumanResource = async (req, res) => {
  try {
    console.log("Fetching data...");
    const content = await HumanResource.find();
    console.log("Fetched content:", content);
    res.json(content);
  } catch (error) {
    console.error("Error fetching Content:", error);
    res.status(500).json({ error: error.message });
  }
};

const getspecifichumanResource = async (req, res) => {
  try {
    console.log("Fetching data...");
    const content = await HumanResource.find().limit(4);
    console.log("Fetched content:", content);
    res.json(content);
  } catch (error) {
    console.error("Error fetching Content:", error);
    res.status(500).json({ error: error.message });
  }
};

const posthumanResource = async (req, res) => {
  try {
    const newhumanResource = await HumanResource.create(req.body);
    res
      .status(201)
      .json({ message: "Human Resource Data Created", data: newhumanResource });
  } catch (error) {
    console.error("Error creating Human Resource:", error);
    res.status(500).json({ error: "Failed to create Human Resource" });
  }
};

const getHumanResourceById = async (req, res) => {
  let result = await HumanResource.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Found." });
  }
};

const putHumanResourceById = async (req, res) => {
  let result = await HumanResource.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
};

const deleteHumanResourceById = async (req, res) => {
  const result = await HumanResource.deleteOne({ _id: req.params.id });
  res.send(result);
};

const searchHumanResource = async (req, res) => {
  let result = await HumanResource.find({
    $or: [
      { name: { $regex: req.params.key } },
      { role: { $regex: req.params.key } },
    ],
  });
  res.send(result);
};

module.exports = {
  gethumanResource,
  posthumanResource,
  getspecifichumanResource,
  getHumanResourceById,
  putHumanResourceById,
  deleteHumanResourceById,
  searchHumanResource,
};