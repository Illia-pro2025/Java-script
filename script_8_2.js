const error = [20, 12, 34, 45, 7653];
// error.push(350)
// console.log(error)

// const problem = ["a","b","c","d"]
// problem.pop
// console.log(problem)

const number = [10, 20, 79, 89, 456, 756, 67, 78, 34, 69];
// const newNumber= number.slice(0,5)
// console.log(newNumber)
// number.includes(89);
// console.log(number.includes(89));

// console.log(error.join(" "))

// const title = "Top 10 benefits of React framework";
// title.split(" ");
// console.log(title.split(" "));

// console.log(title.split(""));

const newnumber = number.concat(error);
// console.log(newnumber)

// console.log(newnumber.indexOf(26))

// const arrNumber = newnumber.includes(26)?"existe in the masive" : "no existe in the masive"
// ;
// console.log(arrNumber)

// const num=33
// if (newnumber.indexOf(num)=== -1) {
//     console.log("existe in the masive");
// } else {
//     console.log("no existe in the masive");
//     console.log(number.indexOf(num))
// }
let sum = 0;
// for (let i = 0; i < newnumber.length; i++) {
//     sum += newnumber[i];
// }
// console.log(sum)

// for (const numbers of newnumber) {
//     sum+= numbers
// }
// console.log(sum)

// const message = "Welcome to Ukraine!";
// let symbole = "I";
// const newMessage = message.toUpperCase().split("").includes(symbole)
// console.log(newMessage)

const anime = ["naruto", "demon slayers", "haikyu"];
const indexAnime = [];
for (let i = 0; i < anime.length; i++) {
  indexAnime.push(`${anime[i]}-${i + 1}`);
}
console.log(indexAnime);

// Напиши скрипт який замінює регістр кожного символа в рядку на
//  протилежний. Наприклад, якщо рядок «JavaScript», то на виході
//  повинно бути «jAVAsCRIPT».

const string = "JavaScript";
// const newString = string.toUpperCase();


// console.log(newString)
let result="";

for (const element of string) {
    ////// console.log(element)
    if(element===element.toUpperCase()){
        result += element.toLowerCase()
    }else{
         result += element.toUpperCase();
    }
}
console.log(result)