import { app } from "./app.js";
import { dbConnection } from "./db/db.js";

dbConnection()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("DB Connection failed !!", err);
  });
