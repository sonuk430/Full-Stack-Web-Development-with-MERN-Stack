const express = require("express");

// Initialize Express
const app = express();
const PORT = 8080;

// Normal Middleware (Global)
app.use((req, res, next) => {
  const error = new Error("Kuch galt ho gya he ");
  next(error);
});

//! Types of Middleware
//01. Built-in ---ex- express , JSON PARSER, STATIC FILE HANDLER, URL-ENCODED FROM PARSER
//02. Custom --Ex- Write Developer
//03. Third Party -- Ex- MORGAN, SECURITY, CORS
//04. Application Level Ex- /HOME, /ABOUT
//05. Router-Level Ex- /USERS, /PRODUCT

// Home Route
app.get("/", (req, res) => {
  res.send("Home Page");
});

// About Route
app.get("/about", (req, res) => {
  res.send("About Page");
});

// Error Handler Middleware

app.use((err, req, res, next) => {
  console.log("Error Middleware se:->", err.message);
  res.send("Handle Error");
});

// Start Serve
app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}...`);
});
