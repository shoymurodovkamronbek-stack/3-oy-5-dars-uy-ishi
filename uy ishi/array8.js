let n = 6;
let arr = [4, 5, 7, 8, 6, 9];

let res = [];

for (let i = 0; i < n; i++) {
    if (arr[i] % 2 != 0) {
        res.push(arr[i]);
    }
}

console.log(res.join(" "));
console.log(res.length);