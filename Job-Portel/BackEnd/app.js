import "dotenv/config";
import express from "express";
import { dbConnection } from "./db/db.js";

const app = express();
const PORT = 8080;

// DB Connection
dbConnection()
  .then(() => {
    // Server Start
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
