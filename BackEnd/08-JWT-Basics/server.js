const app = require("./app");
const dbConnect = require("./db/db");
const PORT = 3000;

dbConnect().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running ${PORT}...`);
  });
});
