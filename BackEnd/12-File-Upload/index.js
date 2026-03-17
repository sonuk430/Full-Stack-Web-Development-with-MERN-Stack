const app = require("./app");
const dbConnection = require("./db/db");

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is Start...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
