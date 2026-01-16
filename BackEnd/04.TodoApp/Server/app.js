import "dotenv/config";
import express from "express";
import cors from "cors";
import { dbConnection } from "./db/db.js";
import { Task } from "./models/task.model.js";

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// get All Task
app.get("/api/v1/tasks", async (req, res) => {
  try {
    const getAllTask = await Task.find({});

    // send Success response
    return res
      .status(200)
      .json({ message: "Get all task successfully", getAllTask });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to get task", error: error.message });
  }
});

// Create Task
app.post("/api/v1/tasks", async (req, res) => {
  try {
    const { title, description, completed } = req.body;

    if (!title) return res.status(400).json({ message: "Title is required" });

    // new Task created
    const newTask = await Task.create({ title, description, completed });

    // send success response
    return res
      .status(201)
      .json({ message: "Task created successfully", task: newTask });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Failed to create task", error: error.message });
  }
});

// update Task
app.put("/api/v1/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    // Find task by ID
    const task = await Task.findById(id);

    // If task not found
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update only provided fields
    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;

    // Save updated task
    const updatedTask = await task.save();

    // Send response
    res.status(200).json({
      message: "Task updated successfully",
      task: updatedTask,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete Task
app.delete("/api/v1/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    await task.deleteOne();

    res.status(200).json({
      message: "Task deleted successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

dbConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...!`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
