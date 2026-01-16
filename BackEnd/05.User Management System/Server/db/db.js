import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Done...!");
  } catch (error) {
    console.log("MONGODB Connection Error...", error);
    process.exit(1);
  }
};
