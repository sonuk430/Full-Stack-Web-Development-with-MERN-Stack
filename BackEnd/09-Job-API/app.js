require("dotenv").config();
const dbConnection = require("./db/db");
const express = require("express");
const authRouter = require("./routes/authRouter");
const josRouter = require("./routes/jobRouter");
const authenticateUser = require("./middleware/authentication");

const app = express();
app.use(express.json());

// Routes
app.use("/api/vi/auth", authRouter);
app.use("/api/vi/jobs", authenticateUser, josRouter);

//  DB connection
dbConnection()
  .then(() => {
    app.listen(8080, () => {
      console.log(`Server is Start...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
