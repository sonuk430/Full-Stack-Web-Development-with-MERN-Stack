import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

app.get("/api/v1/data", (req, res) => {
  res.json({ msg: "hello" });
});

mongoose
  .connect("mongodb://127.0.0.1:27017/custom")
  .then(() => {
    console.log("DB Connect...");
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
