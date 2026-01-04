"use strick";

// const ecmaScript = prompt("javaScript===");
// const trueAndFalse =
//   ecmaScript === "ECMAScript" || "ecmaScript" ? "праверно" : "не праверно";
// console.log(trueAndFalse);

// if (ecmaScript === "ECMAScript" || "ecmaScript") {
//   console.log("праверно");
// } else {
//   console.log("не праверно");
// }

// let a = Number(prompt("number?"));
// let b = Number(prompt("number?"));

// let result = a + b < 4 ? "plus" : "minus";
// console.log(result)

// const x1 = 10;
// const x2 = 30;
// const number = prompt("number");

// if(number<x1){
//     console.log("moins que le block")
// }else if(number>=x1 && number<=x2){
//     console.log("rentre dans le block")
// }else if(number>x2){
//     console.log("plus grand que le block")
// }
// const isOnline = false;
// const isFriend = true;
// const isDnd = false;

// if (isOnline===true && isFriend === true &&isDnd===false) {
//     console.log("oui tu peut lui ecrire")
// }else{
//     console.log("non tu peut pas lui ecrire");
// }

let balance = Number(prompt("ecrit la somme de ton compte"));
let payment = Number(prompt("ecrit la somme du acha"));
alert(`Загальна вартість замовлення ${payment} кредитів. Перевіряємо кількість 
  доступних коштів на рахунку»`);
if (payment < balance) {
  balance = balance - payment;
  console.log(`На рахунку залишилося ${balance} кредитів`);
} else {
  console.log("На рахунку недостатньо коштів для проведення операції!");
}
alert("Операція завершена");