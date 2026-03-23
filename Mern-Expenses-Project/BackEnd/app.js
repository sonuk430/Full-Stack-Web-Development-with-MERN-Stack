require("dotenv").config();
const express = require("express");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const app = express();

//! Middlewares
app.use(express.json()); //? Pass incoming json data

//! Routers
app.use("/", userRouter);

//! Error middleware
app.use(errorHandler);
//!
module.exports = app;
