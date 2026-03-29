require("dotenv").config();
const express = require("express");
const userRouter = require("./router/userRouter");
const app = express();

app.use(express.json()); // get data from body

//! Router
app.use("/api/v1/auth", userRouter);

//! Export
module.exports = app;
