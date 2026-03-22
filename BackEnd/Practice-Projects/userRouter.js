const express = require("express");
const User = require("./userModel");
const router = express.Router();
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.json({ message: "Username,email & password are required" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  const tempUser = { username, email, password: hashPassword };
  const user = await User.create({ ...tempUser });
  res.status(201).json({ message: user });
});

module.exports = router;
