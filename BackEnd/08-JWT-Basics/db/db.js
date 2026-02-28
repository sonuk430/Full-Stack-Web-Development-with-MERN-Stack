require("dotenv").config();

const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Done...");
  } catch (error) {
    console.log("DB Connection Error...");
  }
};

module.exports = dbConnect;
