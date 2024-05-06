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
} = require("../controllers/HumanResourceCntrl.js");
const { posthumanResource } = require("../controllers/HumanResourceCntrl");

router.get("/teamMembers/:id", getTeamMembersById);

router.put("/teamMembers/:id", putTeamMembersById);

router.delete("/teamMembers/:id", deleteTeamMemberById);

router.get("/teammembers/search/:key", searchTeamMember);

router.post("/humanresource", posthumanResource);

router.get("/humanresource", gethumanResource);

router.get("/humanresource/:id", getHumanResourceById);

router.put("/humanresource/:id", putHumanResourceById);

router.delete("/humanresource/:id", deleteHumanResourceById);

router.get("/humanresource/search/:key", searchHumanResource);

module.exports = router;
