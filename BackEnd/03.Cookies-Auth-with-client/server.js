const express = require("express");
const path = require("path");
const app = express();

//! Middleware
app.use(express.urlencoded({ extended: true }));

//! Set the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Simulated DataBase of users
const users = [
  { username: "kumar", password: 123, role: "admin" },
  { username: "bulbul", password: 456, role: "user" },
];

// Home Route
app.get("/", (req, res) => {
  res.render("home");
});
// Login Route (login form)
app.get("/login", (req, res) => {
  res.render("login");
});
// Login Route logic
app.post("/login", (req, res) => {});

// DashBoard Route
app.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

// Logout Route
app.post("/logout", (req, res) => {});

//! Start the server
app.listen(8080, () => {
  console.log("Server is running....");
});
