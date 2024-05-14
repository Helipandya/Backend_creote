const express = require("express");
const router = express.Router();
const {
  getTeamMembersById,
  putTeamMembersById,
  deleteTeamMemberById,
  searchTeamMember,
} = require("../controllers/TeamMembersCntrl");

const {
  gethumanResource,
  getHumanResourceById,
  putHumanResourceById,
  deleteHumanResourceById,
  searchHumanResource,
  posthumanResource,
} = require("../controllers/HumanResourceCntrl.js");

const {
  getcustomerServiceSection,
  postcustomerServiceSection,
  getcustomerServiceSectionById,
  putcustomerServiceSectionById,
  deletecustomerServiceSection,
} = require("../controllers/CustomerServiceSectionCntrl");

const {
  getheader,
  postheader,
  getheaderById,
  putheaderById,
  deleteheaderById,
} = require("../controllers/HeaderCntrl.js");
const {
  putSlidersById,
  getSlider,
  deleteSliderById,
  getSliderById,
  postSlider,
} = require("../controllers/SliderDataCntrl.js");

const {
  putLogoById,
  getLogo,
  deleteLogoById,
  getLogoById,
  postLogo,
} = require("../controllers/LogoCntrl.js");

const { route } = require("./AdminRoute.js");

router.get("/teamMembers/:id", getTeamMembersById);

router.put("/teamMembers/:id", putTeamMembersById);

router.delete("/teamMembers/:id", deleteTeamMemberById);

router.get("/teammembers/search/:key", searchTeamMember);

router.post("/humanResource", posthumanResource);

router.get("/humanresource", gethumanResource);

router.get("/humanresource/:id", getHumanResourceById);

router.put("/humanresource/:id", putHumanResourceById);

router.delete("/humanresource/:id", deleteHumanResourceById);

router.get("/humanresource/search/:key", searchHumanResource);

router.get("/customerServiceSection", getcustomerServiceSection);

router.post("/customerServiceSection", postcustomerServiceSection);

router.get("/customerServiceSection/:id", getcustomerServiceSectionById);

router.put("/customerServiceSection/:id", putcustomerServiceSectionById);

router.delete("/customerServiceSection/:id", deletecustomerServiceSection);

router.get("/header", getheader);

router.post("/header", postheader);

router.get("/header/:id", getheaderById);

router.put("/header/:id", putheaderById);

router.delete("/header/:id", deleteheaderById);

router.put("/slider/:id", putSlidersById);

router.get("/getSlider", getSlider);

router.delete("/slider/:id", deleteSliderById);

router.get("/slider/:id", getSliderById);

router.post("/postSlider", postSlider);

router.get("/logo", getLogo);

router.post("/logo", postLogo);

router.get("/logo/:id", getLogoById);

router.put("/logo/:id", putLogoById);

router.delete("/logo/:id", deleteLogoById);

module.exports = router;
