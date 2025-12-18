const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

// app.get("/product/:id", (req, res) => {
//   res.json({ message: "query parameter" });
//   console.log(req.params);
// });

// app.get("/product/search", (req, res) => {
//   res.json(req.query);
// });

app.listen(8080, () => {
  console.log("Server is Running...");
});
