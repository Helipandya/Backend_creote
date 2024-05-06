const Users = require("../models/Users.js");

const getSlider = async (req, res) => {
  try {
    const users = await Users.find({ displayOnPage: true }).limit(3);
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = getSlider;
