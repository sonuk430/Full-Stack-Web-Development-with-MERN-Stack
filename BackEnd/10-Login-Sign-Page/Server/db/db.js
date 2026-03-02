import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB connection done...");
  } catch (error) {
    console.log("DB Connection Error...", error.message);
  }
};

export { dbConnection };
