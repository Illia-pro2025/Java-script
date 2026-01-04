"use strick";

let list = Number(prompt("1 or 2 or 3"));
let message;
switch (list) {
  case 1:
    message = "Кава";
    break;
  case 2:
    message = "Чай";
    break;
  case 3:
    message = "Сік";
    break;
}
alert(message);

let day = prompt("day please");

switch (day) {
  case (day = "понеділок" || "вівторок" || "середа" || "четвер" || "п'ятниця"):
    message = " робочий день";
    break;
  case (day = "субота" || "неділя"):
    message = "про вихідний";
    break;
}
console.log(message);

let month = Number(prompt("номер місяця"));

switch (month) {
  case 12 || 1 || 2:
    message = "winter";
    break;
  case 3 || 4 || 5:
    message = "sprinter";
    break;
  case 6 || 7 || 8:
    message = "summer";
    break;
  case 9 || 10 || 11:
    message = "autumn";
    break;
}
console.log(message);

let colors = prompt("colors please");

switch (colors) {
  case (colors = "зелений"):
    message = "йти";
    break;
  case (colors = "жовтий"):
    message = "чекати";
    break;
  case (colors = "червоний"):
    message = "стоп";
    break;
}
console.log(message);

let a = 10;
let b = 5;
let opperation = prompt("оператора");

switch (opperation) {
  case (opperation = "+"):
    console.log(a + b);
    break;
  case (opperation = "-"):
    console.log(a - b);
    break;
  case (opperation = "*"):
    console.log(a * b);
    break;
  case (opperation = "/"):
    console.log(a / b);
    break;
  case (opperation = "%"):
    console.log(a % b);
    break;
 
}