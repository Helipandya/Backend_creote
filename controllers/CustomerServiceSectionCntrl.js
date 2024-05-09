const CustomerServiceSection = require("../models/CustomerServiceSection");

const getcustomerServiceSection = async (req, res) => {
    try {
        // console.log("Fetching data...");
        const content = await CustomerServiceSection.find();
        // console.log("Fetched content:", content);
        res.json(content);
    } catch(error) {
        console.error("Error fetching Content:", error);
        res.status(500).json({ error: error.message });
        }
};

const getspecificcustomerServiceSection = async (req, res) => {
    try {
        // console.log("Fetching data...");
        const content = await CustomerServiceSection.find({
          displayOnPage: true,
        }).limit(3);
        // console.log("Fetched content:", content);
        res.json(content);
    } catch(error) {
        console.error("Error fetching Content:", error);
        res.status(500).json({ error: error.message });
        }
};

const postcustomerServiceSection = async (req, res) => {
    try{
      const newcustomerServiceSection = await CustomerServiceSection.create(req.body);
      res.status(201).json({ message: "Customer Service Data Created", data: newcustomerServiceSection});
    } catch (error) {
      console.error("Error creating Customer Service data:", error);
      res.status(500).json({ error: "Failed to create Customer Service data "});
    }
  };

const getcustomerServiceSectionById = async (req, res) => {
  let result = await CustomerServiceSection.findOne({ _id: req.params.id});
  if (result) {
    res.send(result);
  }else {
    res.send({ result: "No Record Found."});
  }
};

const putcustomerServiceSectionById = async (req, res) => {
  let result = await CustomerServiceSection.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
}
  
const deletecustomerServiceSection = async (req, res) => {
  const result = await CustomerServiceSection.deleteOne({ _id: req.params.id });
  res.send(result);
};

module.exports = {
    getcustomerServiceSection,
    postcustomerServiceSection,
    getspecificcustomerServiceSection,
    getcustomerServiceSectionById,
    putcustomerServiceSectionById,
    deletecustomerServiceSection
};