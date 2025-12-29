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
    // check if user exists
    const user = await User.findOne({ email });
    if (user) {
      res.send("User already exists");
    } else {
      // Create new user
      const newUser = new User({
        username,
        email,
        password,
      });
      // Save User
      await newUser.save();
    }
    res.redirect("/login");
  } catch (error) {
    res.send(error);
  }
};
