import mongoose from "mongoose";
import { DB_Name } from "../constance.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_Name}`
    );
    console.log(
      `\n MongoDB connection !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB Connection Error...", error);
    process.exit(1);
  }
};

export default connectDB;
