const app = require("./app");
const dbConnection = require("./db/db");

dbConnection()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running....");
    });
  })
  .catch((err) => {
    console.log(err);
  });
