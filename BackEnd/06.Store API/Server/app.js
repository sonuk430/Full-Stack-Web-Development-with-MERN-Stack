require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");
const productRouter = require("./routes/product.route");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("<h1>Store API</h1> <a href='/api/v1/products'>Products routes</a>");
});

app.use("/api/v/products", productRouter);

// product route

// Error Handler Middlewares
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
