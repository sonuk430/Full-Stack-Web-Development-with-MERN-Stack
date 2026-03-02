import { app } from "./app.js";
import { dbConnection } from "./db/db.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Server is Start...");
    });
  })
  .catch((err) => {
    console.log(e);
  });
