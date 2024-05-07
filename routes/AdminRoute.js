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
  posthumanResource
} = require("../controllers/HumanResourceCntrl.js");

const {
  getcustomerServiceSection,
  postcustomerServiceSection,
  getcustomerServiceSectionById,
  putcustomerServiceSectionById,
  deletecustomerServiceSection
} = require("../controllers/CustomerServiceSectionCntrl");

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

router.delete("/customerServiceSection/:id",deletecustomerServiceSection);

module.exports = router;
