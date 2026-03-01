const mongoose = require("mongoose");

const userShame = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userShame);

module.exports = User;
