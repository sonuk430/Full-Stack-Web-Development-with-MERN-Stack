import express from "express";
import { loginUser, registerUser } from "../controllers/authController.js";

const route = express.Router();

route.post("/auth/register", registerUser);
route.post("/auth/login", loginUser);

export { route };
