const express = require("express");
const userCaroller = require("../controller/userCtrl");

const router = express.Router();

router.post("/register", userCaroller.register);
router.post("/login", userCaroller.login);
router.put("/change-password", userCaroller.changePassword);
router.put("/change-profile", userCaroller.changeUserProfile);
router.put("/user-logout", userCaroller.userLogOut);

module.exports = router;
