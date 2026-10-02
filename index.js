// // // array beriladi osha elementlardan faqat toqlarini yig'inidisini chiqarib beruvchi kod
// // let arr = [1, 2, 3, 4, 5, 6, 7];
// // let sum = 0;

// // for (let i = 0; i < arr.length; i++) {
// //     if (arr[i] % 2 == 1) {
// //         sum += arr[i];
// //     }
// // }

// // console.log(sum)
// let n = 5, a =2, b =2

// let arr = [a, b];

// for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
// }

// console.log(arr.join(" "));
let data = [1, 2, 3, 5, 1]

let res = data.filter((el) => el % 2 == 0)

console.log(res)