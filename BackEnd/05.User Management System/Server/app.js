import "dotenv/config";
import cors from "cors";
import express from "express";
import userRoute from "./routes/user.route.js";
export const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Route
app.use("/api/v1", userRoute);
