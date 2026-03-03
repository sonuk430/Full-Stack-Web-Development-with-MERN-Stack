import bcrypt from "bcrypt";
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

    // Hash password
    // const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id, username }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(201).json({
      message: "User Register Successfully",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    return res.status(400).json({ message: "Server error" });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check required fields
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    // Check if user exists
    const existingEmail = await User.findOne({ email });
    if (!existingEmail) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, existingEmail.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ id: existingEmail._id }, process.env.SECRET_KEY, {
      expiresIn: "7d",
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: existingEmail._id,
        username: existingEmail.username,
        email: existingEmail.email,
      },
    });
  } catch (error) {
    return res.status(400).json({ message: "Failed" });
  }
};
