import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { authRouter } from "./router/auth.router.js";

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

export { app };
