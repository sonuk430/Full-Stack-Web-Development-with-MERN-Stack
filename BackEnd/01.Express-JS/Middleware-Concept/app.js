const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

// Initialize Express
const app = express();
const PORT = 8080;

//===============
//! 01. Built-in Middleware
app.use(express.json()); // Parse Json
app.use(express.static("public")); // Serve Static File
//===============

//===============
//! 02. Third-party Middleware
app.use(morgan("dev")); // Log HTTP Request
app.use(cors()); // Allow Cross-Origin Request

//===============
//! 03. Custom Middleware
app.use((req, res, next) => {
  console.log(`Custom Logger ${req.method}-${req.url}`);
  req.requestTime = new Date();
  next();
});

//===============
//! 04. Application-level Middleware
app.get(
  "/admin",
  (req, res, next) => {
    console.log("Checking admin access...");
    next();
  },
  (req, res) => {
    res.json({ message: "Welcome to admin Panel" });
  }
);
//===============

//===============
//! 05. Router-level Middleware
const userRouter = express.Router();

userRouter.use((req, res, next) => {
  console.log("User router middleware called");
  next();
});
userRouter.get("/profile", (req, res) => {
  res.json({ message: "Welcome to profile" });
});
app.use("/", userRouter);
//===============

app.get("/about", (req, res) => {
  res.json({ message: "Welcome to About Page" });
});
// Start Serve

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}...`);
});
