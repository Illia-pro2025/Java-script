"use strick";
const arr = [];
//maceb array -
// const groupe = ["polina", "sviat", "illia"];
// console.log(groupe);
// console.log(groupe[2]);
// groupe[3] = "Kateryna";
// console.log(groupe);
// groupe[3] = "teacher";
// console.log(groupe);
// console.log(groupe.length);

// for (let i = 0; i < groupe.length; i += 1) {
//   console.log(groupe[i]);
// }

// for (let i = 0; i <= 10; i++) {
//   arr.push(`number ${i}`);
// }
// console.log(arr);
// const groupe = ["polina", "sviat", "illia"];
// for (const student of groupe) {
//     // console.log(student)
//     for (const i of student) {
//         console.log(i)
//     }
// }
//
// const numbers = [2, 30, 60, 4, 4.3];
// const threshold = 10;

// let newNumbers=[]
// for (const number of numbers) {
//   if (number < threshold) {
//     continue;
//   }
//   newNumbers.push(number)
// }
// console.log("les nombre plus grand que le threshold",newNumbers)

const itemPrice=[100 ,79,10,1,45,5]
let summ=0
// for(let i=0; i<itemPrice.length ;i++){
//     summ +=itemPrice[i]
// }
//  console.log(summ)


for (const item of itemPrice) {
    summ+=item
    
}
 console.log(summ);