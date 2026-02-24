const dbConnection = require("./db/db");
const express = require("express");
const authRouter = require("./routes/authRouter");
const josRouter = require("./routes/jobRouter");

const app = express();

// Routes
app.use("/api/vi/auth", authRouter);
app.use("/api/vi/jobs", josRouter);

//  DB connection
dbConnection()
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is Start...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
