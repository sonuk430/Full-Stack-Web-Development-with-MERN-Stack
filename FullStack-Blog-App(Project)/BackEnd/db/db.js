import mongoose from "mongoose";

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("DB Connection Done...");
  } catch (error) {
    console.log("MONGODB Connection Error...", error);
    process.exit(1);
  }
};

export default connectionDB;
