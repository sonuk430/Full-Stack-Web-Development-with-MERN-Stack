// My first Node js code
// console.log("hello from Node.js");

const currentTime = new Date();
const hours = currentTime.getHours();
console.log(hours);

let greeting;
if (hours < 12) {
  greeting = "Good Morning";
} else if (greeting < 18) {
  greeting = "Goode afternoon";
} else {
  greeting = "Goode evening";
}

console.log(greeting);
