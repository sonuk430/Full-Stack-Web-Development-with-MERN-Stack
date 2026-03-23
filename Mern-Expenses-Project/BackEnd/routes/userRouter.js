const express = require("express");
const userController = require("../controllers/usersCtrl");

const userRouter = express.Router();
//! Register
userRouter.post("/api/v1/users/register", userController.register);
//! Login
userRouter.post("/api/v1/users/login", userController.login);

module.exports = userRouter;
