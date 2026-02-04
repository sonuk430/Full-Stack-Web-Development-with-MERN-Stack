const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3000;

const mainRouter = require("./routes/main");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1", mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Server start
const dbConnect = (async () => {
  await mongoose
    .connect("mongodb://localhost:27017/jwtBasics")
    .then(() => {
      console.log("DB Connection Done...");
      app.listen(PORT, () => {
        console.log(`Server is running on PORT:-${PORT}...`);
      });
    })
    .catch((err) => {
      console.log(er);
    });
})();

// dbConnect();
