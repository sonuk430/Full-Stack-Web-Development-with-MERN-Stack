const path = require("path");

// console.log(path);

//! Getting file name from a path
// console.log(path.basename("/users/files/test.txt"));

//! Getting the directory name
// console.log(path.dirname("/users/files/test.txt"));

//! Getting the file extension
// console.log(path.extname("/users/files/test.js"));

//! Join path (works across operating system)
// console.log(path.join("/users", "files", "test.txt"));

//! Getting absolute path
console.log(path.resolve("test.txt"));
