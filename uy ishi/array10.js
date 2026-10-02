let n = 6;
let arr = [4, 5, 7, 8, 6, 9];
let res = [];
for (let i = 0; i < n; i += 2) {
    res.push(arr[i]);
}

for (let i = n - 1; i >= 0; i -= 2) {
    res.push(arr[i]);
}
console.log(res.join(" "));