let n = 6;
let arr = [1, 2, 3, 4, 5, 6];

let res = [];

let chap = 0;
let ong = n - 1;

while (chap < ong) {
    res.push(arr[chap]);
    chap++;

    res.push(arr[chap]);
    chap++;

    res.push(arr[ong]);
    ong--;

    res.push(arr[ong]);
    ong--;
}

console.log(res.join(" "));