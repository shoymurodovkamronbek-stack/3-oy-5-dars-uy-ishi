let arr = [3, 15, 6, 12, 45, 6];

let res = arr.findLastIndex(el => el > arr[0] && el < arr[arr.length - 1]);
console.log(res == -1 ? 0 : res);
