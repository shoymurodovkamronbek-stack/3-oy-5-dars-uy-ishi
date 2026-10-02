let n = 6;
let arr = [4, 5, 7, 8, 6, 9];

let res = [];

for (let i = n - 1; i >= 0; i--) {
    if (arr[i] % 2 == 0) {
        res.push(arr[i]);
    }
}

console.log(res.join(" "));
console.log(res.length);