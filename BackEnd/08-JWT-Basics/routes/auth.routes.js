require("dotenv").config();
const express = require("express");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const newUser = await User.create({ username, password });

  const token = jwt.sign({ id: newUser._id, username }, process.env.jwt_SECRET);
  res.cookie("token", token);

  res.status(201).json({
    message: "User Register Successfully",
    newUser,
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const isUser = await User.findOne({ username });

  if (!isUser) {
    return res.status(401).json({ message: "User not found" });
  }

  const isValidPassword = password === isUser.password;
  if (!isValidPassword) {
    return res.status(401).json({ message: "Password not Valid" });
  }

  res.status(200).json({ message: "user loggedIn successfully", isUser });
});

router.get("/user", async (req, res) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decode = jwt.verify(token, process.env.jwt_SECRET);
    const user = await User.findOne({ _id: decode.id }).select("-password");
    res.status(200).json({ message: "User data fetched", user });
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized Invalid Token" });
  }
  // send User data
});

module.exports = router;
