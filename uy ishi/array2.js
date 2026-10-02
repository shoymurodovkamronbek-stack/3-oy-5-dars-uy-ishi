const fs = require("fs");

const n = Number(fs.readFileSync(0, "utf8").trim());

let arr = [];
let son = 1;

for (let i = 0; i < n; i++) {
    arr.push(son);
    son = son * 2;
}

console.log(arr.join(" "));