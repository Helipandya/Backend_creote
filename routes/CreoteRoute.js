const express = require("express");
const router = express.Router();
const {
  getTeamMember,
  postTeamMember,
  getSpecificTeamMember,
} = require("../controllers/TeamMembersCntrl.js");

const { getspecifichumanResource } = require("../controllers/HumanResourceCntrl.js");

const { getspecificcustomerServiceSection} = require("../controllers/CustomerServiceSectionCntrl.js")
 
const getSlider = require("../controllers/SliderDataCntrl.js");

router.get("/specific-team-members", getSpecificTeamMember);

router.get("/teamMembers", getTeamMember);

router.post("/teamMembers", postTeamMember);

router.get("/specifichumanresource", getspecifichumanResource);

router.get("/specificcustomerServiceSection",  getspecificcustomerServiceSection);

router.get("/getUsers", getSlider);

module.exports = router;
