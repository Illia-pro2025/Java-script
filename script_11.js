// // object ={}
// const employee = {
//   name: "oleh",
//   age: 55,
//   skills: ["js", "react", "node"],
//   isHuman: true,
// };

// console.log(employee.name);
// console.log(employee["name"]);

// //invente une new clée
// employee.workExperiance="5 years"

// delete employee.age
// console.log(employee)

// //underfine
// console.log(employee.color);

// const personageHarryPotter = {
//   name: "sever Sneap",
//   house: "sneake",
//   friend: "Albus Damboldor",
//   enemie: "James Potter",
//   wind: {
//     material: ["arboblend", "ebone"],
//     width: 33 - 35,
//   },
// };
// const name = "Dobby";
// const ability = "magic";

// const caracter = {
//   name: name,
//   ability,
//   getKey: function () {
//     return `name personage${this.name}`
//   },
// };

// console.log(caracter.getKey());

// Створіть об'єкт "book" з властивостями "title",
//  "author", "year" та "genre". Додайте до об'єкту
//  метод, який дозволить змінювати значення
//  властивостей.

// const book = {
//   title: "graf monte kristo",
//   author: "alexsendre Duma",
//   year: 1844,
//   genre: "roman",
//   change:function(){
//     return this.genre="manga"
//   }
// };
// book.change()
// console.log(book)

// const car={
//     brand:"porshe",
//     model:"/",
// years:2026,
// color:"black",
// message:function(){
//     return `you chose a ${this.brand}${this.model}${this.years} with a ${this.color} color`;
// }
// }

// console.log(car.message())

// const restaurant = {
//   name: "studio 94",
//   cuisine: "gastronomic",
//   adress: "rue vander emille 17",
//   rating: 5,
//   changeadress: function () {
//     this.adress = "rue vander emille 90";
//   },
//   changereting: function () {
//     this.rating = 10;
//   },
// };
// restaurant.changeadress()
// restaurant.changereting()
// console.log(restaurant)

// Працюємо з колекцією товарів в кошику:
// Написати методи вказані нижче в коді
// { name: '🍎', price: 50 }
// { name: '🍇', price: 70 }
// { name: '🍋', price: 60 }
// { name: '🍓', price: 110 }

// const cart = {
//   items: [],
// getItems() {
//   return this.items;
// },
// add(product) {
//   for (let i = 0; i < this.items.length; i++) {
//     if (this.items[i].name === product.name) {
//       this.items[i].quantity += 1;
//       return;
//     }
//   }
//   product.quantity = 1;
//   this.items.push(product);
// },

// remove(productName) {
//   for (let i = 0; i < this.items.length; i++) {
//     if (this.items[i].name === productName) {
//       if (this.items[i].quantity > 1) {
//         this.items[i].quantity -= 1;
//       } else {
//         this.items.splice(i, 1);
//       }
//       return;
//     }
//     }
//   },
//   clear() {
//     this.items = [];
//   },
//   countTotalPrice() {
//     let total = 0;
//     for (let i = 0; i < this.items.length; i++) {
//       total += this.items[i].price * this.items[i].quantity;
//     }
//     return total;
//   },
//   increaseQuantity(productName) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name === productName) {
//         this.items[i].quantity += 1;
//         return;
//       }
//     }
//   },
//   decreaseQuantity(productName) {
//     for (let i = 0; i < this.items.length; i++) {
//       if (this.items[i].name === productName) {
//           if (this.items[i].quantity > 1) {
//             this.items[i].quantity -= 1;
//           } else {
//             this.items.splice(i, 1);
//           }
//         return;
//       }
//     }
//   },
// };
// cart.add({ name: "🍎", price: 50 });
// cart.add({ name: "🍇", price: 70 });
// cart.add({ name: "🍋", price: 60 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// cart.add({ name: "🍓", price: 110 });
// console.log(cart.getItems());
// console.log("+++");
// cart.remove("🍎");
// cart.remove("🍇");
// console.log(cart.getItems());
// console.log("total price", cart.countTotalPrice());
// cart.increaseQuantity("🍓");
// console.log(cart.getItems());

// let name="Petro"

// const key="age"

// const fn=function () {
//   return "weight"
// }
// const user={
//   name,
//   [key]: "25",
//   [fn()]:100,

// }

// console.log(user)

// const arr = [1, 2, 22];

// const newArr = [...arr];
// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// // function findFriendByName(arr, name) {
// //   for (let friend of friends) {
// //     if (friend.name === name) {
// //       return "friend existe";
// //     }
// //   }
// //   return "friend no existe";
// // }
// // const listfriend = [];
// // function getAllNames(arr) {
// //   for (let friend of arr) {
// //     listfriend.push(friend.name);
// //   }
// //   return listfriend;
// // }
// function getOnlineFriends(arr) {
//   let newArr = [];
//   for (let item of arr) {
//     if (item.online) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }
// function getOflineFriends(arr) {
//   let newArr = [];
//   for (let item of arr) {
//     if (!item.online) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// }

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// console.log(getAllNames(friends));
// console.log(getOnlineFriends(friends));
// console.log(getOflineFriends(friends));

// Напиши функцію getExpensiveProducts(arr, minPrice),
//  яка повертає масив назв товарів, ціна яких більша за minPrice.
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Сканер", price: 2700, quantity: 3 },
  { name: "Дроїд", price: 400, quantity: 7 },
  { name: "Захоплення", price: 1200, quantity: 2 },
];
function getExpensiveProducts(arr, minPrice) {
  let articles = [];
  for (let item of arr) {
    if (item.price >= minPrice) {
      articles.push(item.name);
    }
  }
  return articles;
}

console.log(getExpensiveProducts(products, 1000));

// Напиши функцію calculateFullWarehousePrice(arr),
//  яка повертає загальну суму всіх товарів на складі
// (ціна × кількість для кожного товару).

function calculateFullWarehousePrice(arr) {
  let total = 0;
  for (let item of arr) {
    total += item.price * item.quantity;
  }
  return total;
}
console.log(calculateFullWarehousePrice(products));
