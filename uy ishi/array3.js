const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(" ").map(Number);

const n = input[0];
const a = input[1];
const d = input[2];

let arr = [];

let son = a;

for (let i = 0; i < n; i++) {
    arr.push(son);
    son = son + d;
}

console.log(arr.join(" "));