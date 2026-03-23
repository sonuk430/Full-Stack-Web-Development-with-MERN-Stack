const app = require("./app");
const dbConnect = require("./db/db");

//!Start the server
const PORT = process.env.PORT || 8080;

dbConnect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on this post ${PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
