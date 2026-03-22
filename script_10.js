// function functionName(arguments1, arguments2, arguments3) {} //function declaration
// return arguments1+ arguments2+ arguments3;

// const functionName= function(arguments1, arguments2, arguments3){} //function expresion

const emails = ["test@gmail.com", "admin@site.com", "user@mail.ua"];
const isValide = function (email) {
  return email.includes("@") && email.length >= 6 && email.length <= 30;
};
const ifUnique = function (emailsAll, email) {
  return !emailsAll.includes(email);
};
const addEmail = function (emailsAll, email) {
  if (!isValide(email)) {
    return "email no validé na pas de @ ou 6-30 symbol";
  }
  if (!ifUnique(emailsAll,email)) {
    return "email pas personnel";
  }
  emailsAll.push(email);
  return "email est bon";
};
console.log(addEmail(emails, "new@mail.com"));
console.log(addEmail(emails, "test@gmail.com"));
console.log(addEmail(emails, "badmail"));
console.log(emails)