import bcryptjs from "bcryptjs";
import { User } from "../models/user.model.js";

// render Login Page
export const loginPage = (req, res) => {
  res.render("login");
};

//  Logic for user Login
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // find user
    const user = await User.findOne({ email });
    const isMatch = await User.findOne({ password });

    if (user && isMatch) {
      res.send("Login Success");
    } else {
      res.send("Login Failed");
    }
  } catch (error) {
    res.send(error);
  }
};

// render Register Page
export const registerPage = (req, res) => {
  res.render("register");
};

//  Logic for user registration
export const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.render("register", {
        title: "Register",
        user: req.username,
        error: "User already exists",
      });
    }

    // hash password
    const hashPassword = await bcryptjs.hash(password, 10);

    // save user
    const user = await User.create({
      username,
      email,
      password: hashPassword,
    });

    res.redirect("/auth/login");
  } catch (error) {
    res.render("register", {
      title: "Register",
      user: req.username,
      error: error.message,
    });
  }
};
