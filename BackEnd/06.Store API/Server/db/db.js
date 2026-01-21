const mongoose = require("mongoose");

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Done....");
  } catch (error) {
    console.log("DB Connection Error....!\n", error.message);
  }
}

module.exports = dbConnection;
