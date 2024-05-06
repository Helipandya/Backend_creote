const express = require("express");
const router = express.Router();
const {
  getTeamMember,
  postTeamMember,
  getSpecificTeamMember,
} = require("../controllers/TeamMembersCntrl.js");

const getSlider = require("../controllers/SliderDataCntrl.js");
const {
  getspecifichumanResource,
} = require("../controllers/HumanResourceCntrl.js");
router.get("/specific-team-members", getSpecificTeamMember);

router.get("/teamMembers", getTeamMember);

router.post("/teamMembers", postTeamMember);

router.get("/getUsers", getSlider);

router.get("/specifichumanresource", getspecifichumanResource);

module.exports = router;
