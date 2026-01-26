import "dotenv/config";
import express from "express";
import { connectDB } from "./db/db.js";
import { router } from "./routes/authRoute.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello ji" });
});

app.use("/api/v1/auth", router);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port No.- ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
