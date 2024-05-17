const TeamMember = require("../models/TeamMember.js");

const getTeamMember = async (req, res) => {
  try {
    // console.log("Fetching team members...");
    const teamMembers = await TeamMember.find().sort({ order: 1 });
    // console.log("Fetched team members:", teamMembers);
    res.json(teamMembers);
  } catch (error) {
    console.error("Error fetching team members:", error);
    res.status(500).json({ error: error.message });
  }
};

const postTeamMember = async (req, res) => {
  try {
    const newMember = await TeamMember.create(req.body);
    res.status(201).json({ message: "Team member created", data: newMember });
  } catch (error) {
    console.error("Error creating team member:", error);
    res.status(500).json({ error: "Failed to create team member" });
  }
};

const getSpecificTeamMember = async (req, res) => {
  try {
    const specificTeamMembers = await TeamMember.find({
      displayOnPage: true,
    })
      .sort({ order: 1 })
      .limit(3);
    res.json(specificTeamMembers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//admin panel teammembers

const getTeamMembersById = async (req, res) => {
  let result = await TeamMember.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No Record Found." });
  }
};

const putTeamMembersById = async (req, res) => {
  let result = await TeamMember.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  res.send(result);
};

const deleteTeamMemberById = async (req, res) => {
  const result = await TeamMember.deleteOne({ _id: req.params.id });
  res.send(result);
};

const searchTeamMember = async (req, res) => {
  let result = await TeamMember.find({
    $or: [
      { name: { $regex: req.params.key } },
      { role: { $regex: req.params.key } },
    ],
  });
  res.send(result);
};

module.exports = {
  getTeamMember,
  postTeamMember,
  getSpecificTeamMember,
  getTeamMembersById,
  putTeamMembersById,
  deleteTeamMemberById,
  searchTeamMember,
};
