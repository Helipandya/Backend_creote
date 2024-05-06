const express = require("express");
const router = express.Router();

const {
  postLogin,
  postRegister,
  postLogOut,
} = require("../controllers/AuthAdminPanelCntrl.js");
router.post("/login", postLogin);

router.post("/register", postRegister);

router.post("/logout", postLogOut);

module.exports = router;
