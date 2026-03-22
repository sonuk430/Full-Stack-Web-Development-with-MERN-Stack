const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./userRouter");

const app = express();
app.use(express.json());

app.use("/api/v1/auth", UserRouter);

// Start DB Connection

const start = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/practice");
  console.log("DB Connection Done..");
};

start()
  .then(() => {
    app.listen(5000, () => {
      console.log("Server is Running...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
