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

// Referencing

const postSchema = new mongoose.Schema(
  {
    title: String,
    content: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

//! User
const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);

//! Create  user with it's posts
// User.create({
//   name: "Rahul",
//   email: "rahul@gmail.com",
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Post Creating
// Post.create([
//   {
//     title: "Hello Rahul1",
//     content: "ka haal ba Rahul-1 ji",
//     author: "694ea263f8a9a2812d8b63a6",
//   },
//   {
//     title: "Hello Rahul2",
//     content: "ka haal ba Rahul-2 ji",
//     author: "694ea263f8a9a2812d8b63a6",
//   },
//   {
//     title: "Hello Rahul3",
//     content: "ka haal ba Rahul-3 ji",
//     author: "694ea263f8a9a2812d8b63a6",
//   },
// ])
//   .then((post) => {
//     console.log(post);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! User and Its posts
Post.find()
  .populate({ path: "author" })
  .then((postsWithUserAuthor) => {
    console.log(postsWithUserAuthor);
  })
  .catch((err) => {
    console.log(err);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
