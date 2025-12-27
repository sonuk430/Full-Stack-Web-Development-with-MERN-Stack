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

//! Course Schema
const courseSchema = new mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

//! Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: String,
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

//* enrollment Schema
const enrollmentSchema = new mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    course: { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
    enrolledAt: { type: Date, default: Date.now() },
    grade: String,
    status: { type: String, enum: ["active", "completed", "dropped"] },
  },
  { timestamps: true }
);
const Enrollment = mongoose.model("Enrollment", enrollmentSchema);

//* Create some course
// Course.create({
//   title: "Node js Basic",
// })
//   .then((course) => {
//     console.log(course);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* Create Student and enroll courses
// Student.create({
//   name: "Ram",
// })
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Enroll the student in the course (with extra info)
// Enrollment.create({
//   student: "694eb1c4cee9f10b945dad5c",
//   course: "694eb19825e51463bda850e0",
//   grade: "A",
//   status: "active",
// })
//   .then((enrollment) => {
//     console.log(enrollment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Get all enrollments for a student ( with full course info)
// Enrollment.find({ student: "694eb1c4cee9f10b945dad5c" })
//   .populate("course")
//   .populate("student")
//   .then((enrollment) => {
//     console.log(enrollment);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Enrollment.find({ course: "694eb19825e51463bda850e0" })
  .populate("course")
  .populate("student")
  .then((enrollment) => {
    console.log(enrollment);
  })
  .catch((err) => {
    console.log(err);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
