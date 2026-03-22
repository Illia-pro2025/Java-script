// const baseSellary=150000
// const overTime=20
// const rate=20

// const getTotalSalery=(base,time,rate)=> base +time*rate

// console.log(getTotalSalery(baseSellary,overTime,rate))

// const employeeSalery={
//      baseSellary:150000,
//  overTime:20,
// rate:20,
// getTotalSalery(){return this.baseSellary+this.overTime*this.rate}
// }
// console.log(employeeSalery.getTotalSalery())

// const animal={
//     legs:4
// }
// const dog=Object.create(animal)
// dog.name="patron"
// console.log(dog)
// console.log(animal.isPrototypeOf(dog))

// class Person {
//     constructor(name,age,colorEyes){
//         this.name=name,
//         this.age=age,
//         this.colorEyes=this.colorEyes
//     }
//     hello(){
//         console.log(`hello I'm ${this.name}`)
//     }
// }
// class Child extends Person {
//   hello() {
//     console.log(`hello I'm small children my name ${this.name}`);
//   }
// }
// const ChildAnton=new Child('Anton', 10,"blue")
// ChildAnton.hello()

// const Petro=new Person("Petro",44,'green')
// console.log(Petro)
// Petro.hello()

// Створіть клас Rectangle, що містить властивості width та height.
// Додайте метод getArea(), який повертає площу прямокутника.

// class Rectangle{
//     constructor( width, height){
//         this.width=width
//         this.height=height
//     }
//  getArea(){return this.width*this.height}
// }
// const rectangle1 = new Rectangle(10, 5);
// console.log(rectangle1.getArea()); // 50

// Створіть клас Calculator, який буде мати наступні методи: add(),
//  subtract(), multiply(), divide(). Кожен метод приймає два
//  аргументи - числа, які необхідно обробити. Результатом кожного
//   методу має бути результат відповідної математичної операції.

// class Calculator {
//   add(a, b) {
//     return a + b;
//   }
//   subtract(a, b) {
//     return a - b;
//   }
//   multiply(a, b) {
//     return a * b;
//   }
//   divide(a, b) {
//     if (b === 0) {
//       return "На нуль ділити не можна";
//     }
//     return a / b;
//   }
// }
// const calculator = new Calculator();
// console.log(calculator.add(2, 3)); // 5
// console.log(calculator.subtract(5, 2)); // 3
// console.log(calculator.multiply(2, 4)); // 8
// console.log(calculator.divide(10, 2)); // 5
// console.log(calculator.divide(10, 0)); // На нуль ділити не можна


class Animal {
  constructor(dog, cat, parrot) {
    this.dog=dog
    this.cat=cat
    this.parrot=parrot
  }
  son(sondog,soncat ,sonparrot) {
    return sondog,soncat, sonparrot
  }
}
const animal =new Animal("gf-gf","miu-miu","cik-cik")
console.log(animal)