let n = 5;

let arr = [1, 2, 3, 4, 5];

let res = [];

for (let i = n - 1; i >= 0; i--) {
    res.push(arr[i]);
}

console.log(res.join(" "));