let n = 6;
let arr = [1, 2, 3, 4, 5, 6];

let res = 0;

for (let i = 0; i < n - 1; i++) {
    if (arr[i] < arr[n - 1]) {
        res = arr[i];
        break;
    }
}

console.log(res);