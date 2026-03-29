const mongoose = require("mongoose");
const app = require("./app");

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
