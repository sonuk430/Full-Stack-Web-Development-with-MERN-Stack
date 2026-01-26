const express = require("express");
const path = require("path");
const app = express();

//! Middleware
app.use(express.urlencoded({ extended: true }));

//! Set the view engine
app.set("view engine", "ejs");

// Simulated DataBase of users
const users = [
  { username: "John", password: 123, role: "admin" },
  { username: "Sarah", password: 456, role: "user" },
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
app.post("/login", (req, res) => {
  //! Find the user login details
  console.log(req.body);
  // const userFound = users.find((user) => {
  //   const { username, password } = req.body;
  //   return user.username === username && user.password === password;
  // });
  // console.log(userFound);
  //! Create some cookies(cookie)
  //! render the user dashBoard
  //! Redirect the user to login page
});

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
