const express = require("express");
const userController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");

const userRouter = express.Router();
//! Register
userRouter.post("/api/v1/users/register", userController.register);
//! Login
userRouter.post("/api/v1/users/login", userController.login);
//! Profile Protected
userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  userController.profile,
);

module.exports = userRouter;
