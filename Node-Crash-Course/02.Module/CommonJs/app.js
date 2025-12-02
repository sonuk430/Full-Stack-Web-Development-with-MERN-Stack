// const test = require("./t.txt");
// const math = require("./math");
// console.log(math.greeting("sonu"));
// console.log(math.add(10, 10));
// console.log(math.subtract(10, 5));

const { add, greeting, subtract } = require("./math");

console.log(greeting("sonu"));
console.log(add(10, 10));
console.log(subtract(10, 5));
