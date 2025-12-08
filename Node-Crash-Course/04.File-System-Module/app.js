const fs = require("fs");
const path = require("path");

// Define a folder and file path

const folderPath = path.join(__dirname, "studentFolder");
const filePath = path.join(folderPath, "studentLists.pdf");

//1. Create a directory if it doesn't exists
// if (!fs.existsSync(folderPath)) {
//Create the folder
//   fs.mkdirSync(folderPath);
//   console.log("Folder Created");
// }

//2. Create and write to a file
// fs.writeFileSync(filePath, "List of Students\n");
// console.log("file Created and written");

//3. Append more contents
// fs.appendFileSync(filePath, "This is an appended Line.\n");

//4. Read the file content
const content = fs.readFileSync(filePath, "utf-8");
// console.log(content);

//5. Delete a file
// fs.unlinkSync(filePath);
