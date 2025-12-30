import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connection Successfully");
  } catch (error) {
    console.log("DB Connection error \n", error);
  }
};

export { dbConnection };
