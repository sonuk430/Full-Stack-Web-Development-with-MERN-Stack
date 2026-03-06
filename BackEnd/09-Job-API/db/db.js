const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connection...");
  } catch (error) {
    console.log("Error...", error.message);
  }
};

module.exports = dbConnection;
