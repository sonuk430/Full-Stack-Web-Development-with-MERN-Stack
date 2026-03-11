const mongoose = require("mongoose");

const USerSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please Provide username"],
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please Provide Email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        ,
        "Please provide valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please Provide Password"],
      minlength: 3,
    },
  },
  { timestamps: true },
);

const User = mongoose.model("User", USerSchema);

module.exports = User;
