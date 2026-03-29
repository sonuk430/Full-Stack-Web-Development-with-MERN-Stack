const express = require("express");
const userRouter = require("./userRouter");
const errorHandler = require("./errorHandlerMiddleware");

const app = express();

app.use(express.json());
//! Router
app.use("/api/v1/practice", userRouter);

// Error Handler middleware
app.use(errorHandler);
//! App Export
module.exports = app;
