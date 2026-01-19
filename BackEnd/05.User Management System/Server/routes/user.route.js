import express from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  updateUser,
} from "../controllers/user.controller.js";

const route = express.Router();

route.get("/users", getAllUsers);
route.post("/users", createUser);
route.put("/users/:id", updateUser);
route.delete("/users/:id", deleteUser);

export default route;
