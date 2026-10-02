const fs = require("fs");

const [n, a, b] = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);

let arr = [a, b];

for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
}

console.log(arr.join(" "));