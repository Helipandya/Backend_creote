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

const { getSpecificImageBox } = require("../controllers/ImageBoxSectionCntrl.js");

const { getSpecificTestimonial } = require("../controllers/TestimonialSectionCntrl.js");

const { getSpecificTab } = require("../controllers/TabSectionCntrl.js");

const { getSpecificBlog } = require("../controllers/BlogSectionCntrl.js");

router.get("/specific-team-members", getSpecificTeamMember);

router.get("/teamMembers", getTeamMember);

router.post("/teamMembers", postTeamMember);

router.get("/specifichumanresource", getspecifichumanResource);

router.get( "/specificcustomerServiceSection", getspecificcustomerServiceSection);

router.get("/specificheader", getspecificheader);

router.get("/getSpecificSlider", getSpecificSlider);

router.get("/getSpecificLogo", getSpecificLogo);

router.get("/getSpecificImageBox", getSpecificImageBox)

router.get("/testimonial", getSpecificTestimonial)

router.get("/tab", getSpecificTab);

router.get("/blog", getSpecificBlog);

module.exports = router;
