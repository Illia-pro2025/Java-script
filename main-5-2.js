"use strick";

// let age = 55;
// let group = "";
// switch (true) {
//   case age >= 0 && age < 18:
//     group = "kids";
//     break;
//   case age >= 18 && age <= 60:
//     group = "adult";
//     break;
//   case age > 60 && age <= 100:
//     group = "retired";
//     break;
//   default:
//     group = "undefined";
//     break;
// }

// console.log(group);

//if else === age>=0 && age < 18:

// let lang = prompt()
// let month
// switch (lang) {
//   case "ua":
//     month = "грудень";
//     break;
//   case "fr":
//     month = "decembre";
//     break;
//   case "en":
//     month = "december";
//     break;
//   case "ch":
//     month = "十二月";
//     break;
//   default:
//     month = "undefined";
//
// }
// console.log(month)

// let a = Number(prompt())
// let message
// switch (a) {
//   case 1:
//     message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
//     break;
//   case 2:
//     message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
//     break;
//   case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;

//   default:
//     message = "Вам передзвонит менеджер";

// }
// alert(message)

let money = prompt("combien ta de argent");
let message;

switch (money) {
  case "20$":
    message =     "☆";
    break;
  case "30$": 
    message =    "☆☆";
    break;
  case "50$":
    message =   "☆☆☆";
    break;
  case "70$":
    message =  "☆☆☆☆";
    break;
  case "120$":
    message = "☆☆☆☆☆";
    break;
  default:
    message = "un peu plus de argent";
}
alert(message);
