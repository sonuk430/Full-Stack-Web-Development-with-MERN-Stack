import express from "express";
import mongoose from "mongoose";

//! Express instance
const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/Database-Associations";

//! Connected to MongoDb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connection Successfully");
  })
  .catch((error) => {
    console.log(`DataBase Connection Error... ${error}`);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
