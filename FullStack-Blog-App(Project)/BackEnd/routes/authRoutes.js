import express from "express";
import {
  login,
  loginPage,
  registerPage,
  register,
} from "../controllers/authController.js";

const userRouters = express.Router();

// render Login Page
userRouters.get("/login", loginPage);
//  Logic for user Login
userRouters.post("/login", login);

// render Register Page
userRouters.get("/register", registerPage);

//  Logic for user registration
userRouters.post("/register", register);

export { userRouters };
