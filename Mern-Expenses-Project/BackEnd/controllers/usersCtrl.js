const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");

//!User Registration

const userController = {
  //! Register
  register: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    //! validate
    if (!username || !email || !password) {
      throw new Error("Please all fields are required");
    }

    //! Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      throw new Error("User already exists");
    }

    //! Hash the user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    //! create the user & save into db
    const userCreated = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      username: userCreated.username,
      email: userCreated.email,
      id: userCreated._id,
    });
  }),

  //! Login
  login: asyncHandler(async (req, res) => {
    //! get the user data
    const { email, password } = req.body;
    //! if email is correct
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("Invalid Login credentials");
    }

    //! Compare the user password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid Login credentials");
    }

    //! Generate a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    //! Send the response

    res.status(200).json({
      message: "Login Success",
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  }),

  //! Profile
  profile: asyncHandler(async (req, res) => {
    //! find the user
    const user = await User.findById(req.user);
    if (!user) {
      throw new Error("User not found");
    }

    //! Send the response
    res.json({ username: user.username, email: user.email });
  }),
};

module.exports = userController;
