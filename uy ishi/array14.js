let n = 6;
let arr = [1, 2, 3, 4, 5, 6];

let res = [];

for (let i = 0; i < n; i += 2) {
    res.push(arr[i]);
}

for (let i = 1; i < n; i += 2) {
    res.push(arr[i]);
}

console.log(res.join(" "));