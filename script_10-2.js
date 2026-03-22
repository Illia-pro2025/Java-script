// function summ (a,sqrb){
//     return a+sqrb
// }

// //call back la function est un argument--|>
// function sqrb(b){
//     return b*b
// }

// console.log(summ(5,sqrb(2)))

// //function declaretion
// function fn(){}

// //function expression
// const fn1=function(){}

// //function vecteur
// //si l'action est petit il faut pas mettre de {}
// const fn =()=>{}

// const summ = function (a, sqrb) {
//   return a + sqrb;
// };
// const sqrb = (b) => b * b;

// console.log(summ(5, sqrb(2)));

// const arrSqr=(arr)=>{
//     let newArr=[]
//     for (const item of arr) {
//         newArr.push(item*item)
//     }
//     return newArr
// }

// console.log(arrSqr([1,2,3,4,5,6]))

// const arr = [1, 2, 3, 4, 5];

// function cb(summ, num) {
//   return summ + num;
// }

// function sumArray(arr, callback) {
//   let total = 0;
//   for (let item of arr) {
//     total = callback(total, item);
//   }
//   return total;
// }

// console.log(sumArray(arr, cb));

const arr = [1, 2, 3, 4, 5];

const cb = (number /*arr*/, mlt /*3*/) => number /*arr*/ * mlt/*3*/;

function multiplyArray(arr, num /*3*/, callback/*cb*/) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item, num /*3*/));
  }
  return result;
}

console.log(multiplyArray(arr, 3, cb));

