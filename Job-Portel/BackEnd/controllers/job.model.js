import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Job title is required"],
      trim: true,
      maxlength: [30, "Title must be max 30 characters"],
    },
    description: {
      type: String,
      required: [true, "Job description is required"],
      trim: true,
      maxlength: [250, "Description must be max 250 characters"],
    },
    location: {
      type: String,
      required: [true, "Job location is required"],
      trim: true,
    },
    salary: {
      type: Number,
      min: 0,
    },
    deadline: {
      type: Date,
      required: [true, "Job deadline is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    author: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.model("Job", jobSchema);
