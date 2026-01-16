import express from "express";
import {
  createUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller.js";

const route = express.Router();

route.get("/users", getAllUsers);
route.post("/users", createUser);
route.put("/users/:id", updateUser);

export default route;
