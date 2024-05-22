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

const {
  postImageBox,
  putImageBoxById,
  getImageBox,
  getImageBoxById,
  deleteImageBoxById
} = require("../controllers/ImageBoxSectionCntrl.js");

const {
  postTestimonial,
  putTestimonialById,
  getTestimonial,
  getTestimonialById,
  deleteTestimonialById
} = require("../controllers/TestimonialSectionCntrl.js");

const {
  postTab,
  putTabById,
  getTab,
  getTabById,
  deleteTabById
} = require("../controllers/TabSectionCntrl.js");

const {
  postBlog,
  getBlog,
  getBlogById,
  putBlogById,
  deleteBlogById
} = require("../controllers/BlogSectionCntrl.js")

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

router.get("/imageBox", getImageBox);

router.post("/imageBox", postImageBox);

router.get("/imageBox/:id", getImageBoxById);

router.put("/imageBox/:id", putImageBoxById);

router.delete("/imageBox/:id", deleteImageBoxById);

router.get("/testimonial", getTestimonial);

router.post("/testimonial", postTestimonial);

router.get("/testimonial/:id", getTestimonialById);

router.put("/testimonial/:id", putTestimonialById);

router.delete("/testimonial/:id", deleteTestimonialById);

router.get("/tab", getTab);

router.post("/tab", postTab);

router.get("/tab/:id", getTabById);

router.put("/tab/:id", putTabById);

router.delete("/tab/:id", deleteTabById)

router.get("/blog", getBlog);

router.post("/blog", postBlog);

router.get("/blog/:id", getBlogById);

router.put("/blog/:id", putBlogById);

router.delete("/blog/:id", deleteBlogById);

module.exports = router;
