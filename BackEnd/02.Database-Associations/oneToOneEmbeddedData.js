import express from "express";
import mongoose from "mongoose";

//! Express instance
const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/Database-Associations";

// Connected to MongoDb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connection Successfully");
  })
  .catch((error) => {
    console.log(`DataBase Connection Error... ${error}`);
  });

// Profile Schema
const profileSchema = new mongoose.Schema({
  age: Number,
  bio: String,
  avatar: String,
});

// User Schema
const usersSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    profile: profileSchema, // Embedded directly
  },
  { timestamps: true }
);

// Compile to form model
const User = mongoose.model("User", usersSchema);

// Create a sample user

User.create({
  name: "Sonu",
  email: "sonu@gamail.com",
  profile: {
    age: 28,
    bio: "Sonu-2",
    avatar: "sonu.jpg",
  },
})
  .then((user) => {
    console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
