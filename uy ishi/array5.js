let n = 5;

let arr = [];

let a = 1;
let b = 1;

for (let i = 0; i < n; i++) {
    arr.push(a);

    let c = a + b;
    a = b;
    b = c;
}

console.log(arr.join(" "));