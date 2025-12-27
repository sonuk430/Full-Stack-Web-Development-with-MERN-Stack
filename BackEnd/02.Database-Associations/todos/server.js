import express from "express";
import mongoose from "mongoose";
import { User } from "./user.models.js";
import { SubTodo } from "./sub_todo_models.js";
import { Todo } from "./todo.models.js";

const app = express();
const PORT = 8080;
const MONGO_URI = "mongodb://localhost:27017/TodoDataModel";

// DB Connection
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("DataBase connection Done...");
  })
  .catch((err) => {
    console.log(err);
  });

//! Create User
// User.create({
//   username: "Ram Ji",
//   email: "ramji@gaiml.com",
//   password: "123",
// })
//   .then((user) => {
//     console.log(user);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! SubTodo Create
// SubTodo.create({
//   content: "Youtube",
//   complete: false,
//   crestedBy: "69501513801b1ecf9b607d92",
// })
//   .then((subTodo) => {
//     console.log(subTodo);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//! Todo Create
Todo.create({
  content: "Ka haal ba Ram ji",
  complete: false,
  createdBy: "69501513801b1ecf9b607d92",
  subTodos: "69501656916a5c386e2efb80",
})
  .then((subTodo) => {
    console.log(subTodo);
  })
  .catch((err) => {
    console.log(err);
  });

// Server Start
app.listen(PORT, () => {
  console.log(`Server is running on Port No.- ${PORT}...`);
});
