import express from "express";
import mongoose from "mongoose";

const app = express();
const PORT = 8080;

const profileSchema = new mongoose.Schema({
  age: Number,
  collage: String,
  role: String,
});

const Profile = mongoose.model("Profile", profileSchema);

// Create a profile
// Profile.create(
//   {
//     age: 25,
//     collage: "Ram ji",
//     role: "Student",
//   },
//   { timestamps: true }
// )
//   .then((profile) => {
//     console.log(profile);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  profile: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Profile",
  },
});

const User = mongoose.model("User", userSchema);

// Create a new user

// User.create({
//   name: "Sohan",
//   email: "Sohan@gmail.com",
//   profile: "694c0bc5e1d75d1918740b4f",
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Polluted User
User.findById("694c0c7382e070142b2ae943")
  .populate({ path: "profile", select: "-age -role" })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// Data Base connection
mongoose
  .connect("mongodb://localhost:27017/practice")
  .then(() => {
    console.log("DB Connection Done...");
  })
  .catch((err) => {
    console.log(err);
  });
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
