"use strick";

// //string

// const str = "string";

// console.log(str[0]);
// console.log(str[1]);
// console.log(str[2]);
// console.log(str[3]);
// console.log(str[4]);
// console.log(str[5]);

// console.log("long string" + str.length);

// const message = "I" + " love" + " eat";
// console.log(message);

// const num = 1 + "1";
// console.log(num);
// console.log(typeof num);

// console.log(str.toLocaleLowerCase()); //a
// console.log(str.toUpperCase()); //A
// console.log(str);

// console.log(str.indexOf("g"));
// console.log(str.indexOf("k"));
// console.log(str.indexOf("G"));

// console.log(str.includes("st")); //true / false

// console.log(str.toLowerCase().includes("st"));

// console.log(str.startsWith("s"));
// console.log(str.endsWith("!"));

// console.log(str.padStart(50,")"));
// console.log(str.padEnd(50, ")"));

// const p="polina"
// const s="sviatoslav"
// const i="illia"

// const group= `hello my favorite studie: beutifull ${p} , ${s} ,${i}                                                                                    `
// console.log(group.trim())

// const sum = `${2+2*2}`
// console.log(sum)

// const userMinutes = Number(prompt("minute?"));
// const hours = Math.floor(userMinutes / 60);
// const minutes = userMinutes - (hours * 60);
// console.log(`${userMinutes}=${hours}:${minutes}`)

const fullName = "Sitko Illia";
console.log(fullName.length);
console.log(fullName.indexOf(" "));
console.log(fullName.toUpperCase());
console.log(fullName.charAt()); //first letter

const js = "JavaScript";
console.log(js.replace("J", "j"));

const sub = js.substring(4);
console.log(sub);

const a = "I";
const b = " love";
const c = " tech skill";

console.log(a.concat(b, c));

const x = "illia";
const y = "sitko";
const n = "hotel";
const g = 490;

console.log(`Гість ${x} ${y} поселяється в ${n} номер ${g}`.trim());

const balance = "Ваш баланс поповнено на 1";
console.log(
  balance +
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
);
console.log(
  (
    balance +
    "0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"
  ).length
);
const orderMsg = `Ви замовляєте 15 тістечок.`;
console.log(orderMsg.includes(15));
console.log(orderMsg.indexOf("1"));

const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";
const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";

console.log(string1.toLowerCase().indexOf(blacklistedWord1));
console.log(string1.toLowerCase().includes(blacklistedWord1));
console.log(string1.toLowerCase().indexOf(blacklistedWord2));
console.log(string1.toLowerCase().includes(blacklistedWord2));
console.log(string2.toLowerCase().indexOf(blacklistedWord1));
console.log(string2.toLowerCase().includes(blacklistedWord1));
console.log(string2.toLowerCase().indexOf(blacklistedWord2));
console.log(string2.toLowerCase().includes(blacklistedWord2));
console.log(string3.toLowerCase().indexOf(blacklistedWord1));
console.log(string3.toLowerCase().includes(blacklistedWord1));
console.log(string3.toLowerCase().indexOf(blacklistedWord2));
console.log(string3.toLowerCase().includes(blacklistedWord2));
