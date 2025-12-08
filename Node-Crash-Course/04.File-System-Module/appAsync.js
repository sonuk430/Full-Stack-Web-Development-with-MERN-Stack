const fs = require("fs");
const path = require("path");

// Define a folder and file path

const folderPath = path.join(__dirname, "products");
const filePath = path.join(folderPath, "products.pdf");

//1. Create a directory if it doesn't exists
