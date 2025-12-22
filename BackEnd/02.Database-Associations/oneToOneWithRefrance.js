import express from "express";
import mongoose from "mongoose";

//! Express instance
const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/Database-Associations";

// ProfileSchema
const profileSchema = new mongoose.Schema(
  {
    age: Number,
    bio: String,
    avatar: String,
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);

// UserSchema

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    profile: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Profile,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

//! Profile Creating

// Profile.create({
//   age: 28,
//   bio: "Designer",
//   avatar: "abc.png",
// })
//   .then((profile) => {
//     console.log(profile);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Create User
// User.create({
//   name: "SonuKumar",
//   email: "abc@gamil.com",
//   profile: "69496f8c4ce5dc2696c89a3b",
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

User.findById("6949702df41026957fcd68b7")
  .populate({ path: "profile", select: "-age -bio" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
//! Connected to MongoDb
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("MongoDB Connection Successfully");
  })
  .catch((error) => {
    console.log(`DataBase Connection Error... ${error}`);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
