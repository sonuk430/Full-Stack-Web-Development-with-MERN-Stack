require("dotenv").config();
const express = require("express");
const notFoundMiddleware = require("./middlewares/notFound");
const authRouter = require("./routers/authRouter");
const errorMiddleware = require("./middlewares/errorMiddleware");
const asyncHandler = require("./utils/asyncHandler");

const app = express();

app.use(express.json());
// Router
app.use("/api/v1/auth", asyncHandler(authRouter));

// Middleware
app.use(notFoundMiddleware);
app.use(errorMiddleware);
module.exports = app;
