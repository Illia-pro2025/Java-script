// const summ = function () {
//   const arr = Array.from(arguments);
//   console.log(arr);
//   // let total=0
//   // for (const ar of arguments) {
//   //     total+=ar
//   // }
//   // return total
// };

// summ(11, 2, 3);
// // summ(11, 2, 3, 5, 8)
// // summ(11, 2, 3, 5, 8, 9, 10, 34, 45, 29)

// const globalVar = "the visibily in the code";

// if (true) {
//   const a = 1;
//   if (true) {
//     const b = 2;
//     if (true) {
//       const c = 3;
//       if (true) {
//         const d = 4;
//         if (true) {
//           const e = 5;
//         }
//       }
//     }
//   }
// }

// const maxNumber = function (array) {
//   let max = array[0];
//   for (const num of array) {
//     if (max <= num) {
//       max = num;
//     }
//   }
//   return max;
// };
// console.log(maxNumber([33, 57, 37, 89, 1100, 706, 589]));

const hello= function(name){
    return `hi  ${name}`
}

const userName = prompt('please read you name')
console.log(hello(userName))