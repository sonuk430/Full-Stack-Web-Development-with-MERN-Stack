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
    student: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

//! Student Schema
const studentSchema = new mongoose.Schema(
  {
    name: String,
    course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);

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
//   course: ["694ea90cdb9722a5c9608b2f", "694ea926a6735f90fd6ada38"],
// })
//   .then((student) => {
//     console.log(student);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//* Update courses to reference the student
// Course.updateMany(
//   {
//     _id: { $in: ["694ea90cdb9722a5c9608b2f", "694ea926a6735f90fd6ada38"] },
//   },
//   {
//     $push: { student: "694eabc7ecbf942a17df0ef0" },
//   }
// )
//   .then((course) => {
//     console.log(course);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Get student and their enrolled course
// Student.findById("694eabc7ecbf942a17df0ef0")
//   .populate("course", "title") // Only show title
//   .then((course) => {
//     console.log(course);
//   })
//   .catch((err) => {
//     console.lpg(err);
//   });

//! Get course and its students:
Course.findById("694ea90cdb9722a5c9608b2f")
  .populate("student", "name") // Only show name
  .then((student) => {
    console.log(student);
  })
  .catch((err) => {
    console.lpg(err);
  });

//! Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}...`);
});
