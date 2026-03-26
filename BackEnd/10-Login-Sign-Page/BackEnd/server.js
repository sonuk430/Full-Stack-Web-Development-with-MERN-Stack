const app = require("./app");
const dbConnect = require("./db/db");

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server is running on ${process.env.PORT}...`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
