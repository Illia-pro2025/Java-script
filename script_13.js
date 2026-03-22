// let user={
//     name: "polina",
//     age: 16,
//     city:"kiev"
// }
// for (const key in user) {
//   console.log(user[key])
// }
// const newUser =JSON.parse(JSON.stringify(user))
// const newUserAlpha =structuredClone(user)const user={
// const user = {
//   name: "polina",
//   age: 16,
//   city: "kiev",
// };

// const { name,skills="Js", age, city } = user;

// console.log(name,skills, age ,city);

//  const colors = ["red", "green", "blue"];

// const [color1, color2="transparrent", color3]=colors;

// console.log(color3)

//rest=...
// const [first,...colorSubArr]=colors
// console.log(first)
// console.log(colorSubArr)

// function createStudent({name, ...info}) {

//   return `student ${name} info secret ${JSON.stringify(info)}`
// }
// console.log(createStudent({
//   name: "Оля",
//   age: 14,
//   course: "JavaScript",
//   level: "beginner",
// }));
// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };

// const{name,age,email}=user
// console.log(email);

const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  features: ["power windows", "rear camera", "navigation"],
  safety: {
    airbags: true,
    antilock_brakes: true,
    stability_control: true,
  },
};
const {
  make,
  model,
  year,
  features: [a1, a2, a3],
  safety: { airbags, antilock_brakes, stability_control },
} = car;

console.log(a1);
