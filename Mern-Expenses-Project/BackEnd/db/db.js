const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connection Done...");
  } catch (error) {
    console.log("DB Connection failed...", error.message);
  }
};

module.exports = dbConnect;
