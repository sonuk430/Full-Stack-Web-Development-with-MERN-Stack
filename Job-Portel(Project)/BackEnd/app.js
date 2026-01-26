import "dotenv/config";
import express from "express";
import { dbConnection } from "./db/db.js";
import { User } from "./models/user.model.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // JSON body reader

// Login User
app.get("/auth/login", (req, res) => {
  res.send("Login");
});

// Register User
// POST → Validate → Check Email → Create User → Save → Respond
app.post("/api/v1/auth/register", async (req, res) => {
  const { name, password, email, role } = req.body;
  try {
    // check all required fields
    if (!name || !password || !email) {
      return res
        .status(400)
        .json({ success: false, message: "All field are required" });
    }

    const existingUser = await User.findOne({ email });
    // if email already exists
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    } else {
      // new User Create
      const newUser = new User({
        name,
        email,
        password,
        role,
      });
      // Save user to database
      const savedUser = await newUser.save();
      // Send success response
      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        user: savedUser,
      });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

// DB Connection
dbConnection()
  .then(() => {
    // Server Start
    app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
