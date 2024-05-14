const express = require("express");
const router = express.Router();
const {
  getTeamMember,
  postTeamMember,
  getSpecificTeamMember,
} = require("../controllers/TeamMembersCntrl.js");

const {
  getspecifichumanResource,
} = require("../controllers/HumanResourceCntrl.js");

const {
  getspecificcustomerServiceSection,
} = require("../controllers/CustomerServiceSectionCntrl.js");

const { getspecificheader } = require("../controllers/HeaderCntrl.js");

const { getSpecificSlider } = require("../controllers/SliderDataCntrl.js");

const { getSpecificLogo } = require("../controllers/LogoCntrl.js");

router.get("/specific-team-members", getSpecificTeamMember);

router.get("/teamMembers", getTeamMember);

router.post("/teamMembers", postTeamMember);

router.get("/specifichumanresource", getspecifichumanResource);

router.get( "/specificcustomerServiceSection", getspecificcustomerServiceSection);

router.get("/specificheader", getspecificheader);

router.get("/getSpecificSlider", getSpecificSlider);

router.get("/getSpecificLogo", getSpecificLogo);

module.exports = router;
