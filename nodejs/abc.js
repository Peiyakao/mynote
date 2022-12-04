console.log("hello!");
const fs = require("fs");
fs.writeFileSync('first.txt', 'Hello, Have a nice day!');
fs.appendFileSync('first.txt', 'Are you hungry?');