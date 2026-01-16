import { User } from "../models/user.model.js";

//! Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const getAllUser = await User.find({});
    //response send
    res.status(200).json({
      success: true,
      message: "All User Fetched successfully",
      getAllUser,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message,
    });
  }
};

//! Create new User
export const createUser = async (req, res) => {
  const { name, email } = req.body;

  // Check if name & email
  if (!name) {
    return res.status(400).json({ message: "Name is required" });
  }

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  // Check Email exists or not in DB

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(409).json({
      message: "User already exists with this email",
    });
  }

  // create New User
  const newUser = await User.create({ name, email });
  //response send
  res.status(201).json({
    success: true,
    message: "User created successfully",
    newUser,
  });
};

//! Get All Users
export const updateUser = async (req, res) => {
  const { id } = req.params;

  const { name, email, role, isActive } = req.body;

  // User Find Based on ID
  const user = User.findById(id);

  // If task not found
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
};
