import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DataBase Connection Done...");
  } catch (error) {
    console.log("Error DB Connection failed ", error.message);
    process.exit(1);
  }
};
