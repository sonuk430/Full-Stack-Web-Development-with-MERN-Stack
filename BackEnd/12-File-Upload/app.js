require("dotenv").config();
const express = require("express");
const notFound = require("./middleware/not-found");
const productRouter = require("./routes/productRoutes");
const fileUpload = require("express-fileupload");

const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("<h1>File Upload Starter</h1>");
});

app.use("/api/v1/products", productRouter);

// middleware
app.use(notFound);

module.exports = app;
