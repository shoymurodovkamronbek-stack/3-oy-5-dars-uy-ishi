let arr = [1, 2, 3, 4, 5];
let k = 1;
let l = 2;

let res = arr.slice(k, l + 1).reduce((sum, el) => sum + el, 0);
console.log(res);