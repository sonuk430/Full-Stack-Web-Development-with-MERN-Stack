import jwt from "jsonwebtoken";
import { User } from "../models/auth.model.js";
// new User Register
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // check all fields are required
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fielded are required" });
    }

    // Check Existing User
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User Already Register" });
    }

    const user = await User.create({ username, email, password });
    const token = jwt.sign({ id: user._id, username }, process.env.SECRET_KEY);

    return res
      .status(201)
      .json({ message: "User Register Successfully", user, token });
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Unauthorized" });
    }

    const existingEmail = await User.findOne({ email });

    if (password === existingEmail.password) {
      return res.status(200).json({ message: "LogIn Successfully" });
    }
    return res.status(400).json({ message: "LogIn Failed" });
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
};
