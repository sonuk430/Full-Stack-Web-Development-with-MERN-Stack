const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jobAPI");
    console.log("DB Connection...");
  } catch (error) {
    console.log("Error...", error.message);
  }
};

module.exports = dbConnection;
