import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./db/db.js";

const app = express();
// middleware
app.use(express.json());
app.use(cors());

//! DB Connection
connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server running start...");
    });
  })
  .catch((err) => {
    console.log(err);
  });
