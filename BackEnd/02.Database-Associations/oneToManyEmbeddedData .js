import express from "express";
import mongoose from "mongoose";

//! Express instance
const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/Database-Associations";

//! Connected to MongoDb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connection Successfully");
  })
  .catch((error) => {
    console.log(`DataBase Connection Error... ${error}`);
  });

// Embedded post schema (inline, no separate collection)

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    posts: [postSchema], // Embedded directly
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

// Create  user with it's posts

// User.create({
//   name: "Mohan2",
//   email: "mohan2@gmail.com",
//   posts: [
//     { title: "NOde Streams Simplified", content: "Streams are power full" },
//     { title: "Mern Stack", content: "Node js" },
//   ],
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! User and Its posts
User.findOne({ name: "Mohan2" })
  .then((userWithPosts) => {
    console.log(userWithPosts);
  })
  .catch((err) => {
    console.log(err);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
