// const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (const number of numbers) {
//     console.log(number*2)
// }

const numbers = [1, 2, 3, 4, 5];
// const filteredNumbers = [];

// for (let i = 0; i < numbers.length; i += 1) {
//   if (numbers[i] > 3) {
//     filteredNumbers.push(numbers[i]);
//   }
// }

// numbers.forEach((number, index) => console.log(`${index}----${number * 2}`));
// numbers.map((number, index) => console.log(`${index}----${number * 2}`));

// const toys =["ball","barbie","car"]
// // toys.forEach(toy=>console.log(toy))
// const newToys =toys.map((toy) =>{return toy+"lalala"}  );
// console.log(newToys)
// //map retour le tous + ajoute
// //forEach trie le tout

const users = [
  { id: "000", name: "Mango", isActive: true , age:34 },
  { id: "001", name: "Poly", isActive: false , age:65 },
  { id: "002", name: "Ajax", isActive: true , age:1111 },
  { id: "003", name: "Chelsey", isActive: false , age:39 },
];


const adult = users.every((user) => user.age >=18);
console.log(adult)
const age = users.some((user) => user.age >= 18);
console.log(age);
// const user = users.find((user) => user.id === "003");
// const online=users.filter(user=>user.isActive===true)
// console.log(online)
// let online=[]
// for (let user of users) {
//     if(user.isActive){
//         online.push(user)
//     }
// }
// console.log(online)
