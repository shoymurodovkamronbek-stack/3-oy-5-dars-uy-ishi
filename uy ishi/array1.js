const fs = require("fs");

const n = parseInt(fs.readFileSync(0, "utf8").trim());
let arr = [];

for (let i = 0; i < n; i++) {
    arr.push(2 * i + 1);
}

console.log(arr.join(" "));