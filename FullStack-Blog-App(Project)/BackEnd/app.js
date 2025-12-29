import "dotenv/config";
import express from "express";
import connectionDB from "./db/db.js";
import { userRouters } from "./routes/authRoutes.js";

const app = express();
// PORT
const PORT = process.env.PORT || 3000;
//! middlewares
app.use(express.urlencoded({ extended: true })); // passing form data
// EJS
app.set("view engine", "ejs");

// Routes
app.use("/auth", userRouters);
// Server Start
connectionDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed...", err);
  });
