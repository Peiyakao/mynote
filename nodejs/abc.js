// console.log("hello!");
// const fs = require("fs");
// fs.writeFileSync('first.txt', 'Hello, Have a nice day!');
// fs.appendFileSync('first.txt', 'Are you hungry?');

// const name = require("./lession2.js"); 引用指定檔案中已輸出的參數
// console.log(name);
const notes = require("./note.js");
const validator = require("validator");
const msg = notes();
console.log(msg);
console.log(validator.isEmail("cubearcu@gmail.com"));