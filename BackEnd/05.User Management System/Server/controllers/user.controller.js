import { User } from "../models/user.model.js";

//! Get All Users
export const getAllUsers = async (req, res) => {
  try {
    const getAllUser = await User.find({});
    //response send
    res.status(200).json({
      success: true,
      message: "All User Fetched successfully",
      userList: getAllUser,
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

//! Update Users
export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, email, role, isActive } = req.body;

    // User Find Based on ID
    const user = await User.findById(id);

    // If task not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Update only provided fields
    if (name !== undefined) user.name = name;
    if (email !== undefined) user.email = email;
    if (role !== undefined) user.role = role;
    if (isActive !== undefined) user.isActive = isActive;

    // Save user
    const updateUser = await user.save();

    // Send response
    res.status(200).json({
      message: "User updated successfully",
      updateUser,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

//! Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // const { name, email, role, isActive } = req.body;

    // User Find Based on ID
    const user = await User.findById(id);

    // If task not found
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await user.deleteOne();

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};
