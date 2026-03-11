const User = require("../models/authModel");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// ! ***********  New Register
const register = async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    throw new ApiError(400, "All fields are required");
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, "User already exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    username,
    email,
    password: hashPassword,
  });
  const createdUser = await User.findById(user._id).select("-password");

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "30d" },
  );

  return res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { createdUser, token },
        "New User Created successfully",
      ),
    );
};

// ! *********** Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!password || !email) {
    throw new ApiError(400, "Please provide email & Password");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new ApiError(400, "Invalid Credentials");
  }

  // Compare Passwords
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new ApiError(400, "Invalid Credentials");
  }

  const token = jwt.sign(
    { userId: user._id, username: user.username },
    process.env.JWT_SECRET,
    { expiresIn: "30d" },
  );

  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: { username: user.username }, token },
        "Users Login successfully",
      ),
    );
};

module.exports = { register, login };
