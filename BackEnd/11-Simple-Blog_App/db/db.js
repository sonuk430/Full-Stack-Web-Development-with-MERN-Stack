const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB  Connection Done...");
  } catch (error) {
    console.log("BD Connection Filed...", error.message);
  }
};

module.exports = dbConnection;
