// document.body.innerHTML = "<h1>Hello World!</h1>";
js = "amazing";
// if (js === "amazing") {
//   alert("JS is amazing");
// }

// Naming Conventions
let jonas_matilda = "JM";
let $function = "Function at home"; // _ and $ are the only two symbols allowed besides numbers and letters

let CamelCase = "conventionally correct";
let Person =
  "conventionally incorrect, used only for Objects and Classes as far as I know";
let PI = 3.14159246; // used for real constants
const FUCK = "permanent desire"; // used for our own constants
console.log(PI);
// prompt("How're you doing?");

true;
console.log(true);
console.log(typeof true);

let age = 30; // mutable and block scoped
age = 31;

const birthYearZaeem = 1998;
const birthYearYashfa = 2002;
// const nothing; // will give an error because consts can't be left empty since they're immutable

lastName = "Saleem"; // By default, things are stored in var type variables
console.log(lastName);

// Wherever you find a value repeating itself, make a variable and pit it in there
const now = new Date();
const currentYear = now.getFullYear();
const ageZaeem = currentYear - birthYearZaeem;
const ageYashfa = currentYear - birthYearYashfa;
console.log("Your age is " + ageZaeem); // Concatenation
console.log("Yashfa's age is " + ageYashfa);
console.log(ageZaeem * 2, ageYashfa / 10, 2 ** 3); // ** is the exponentiation operator

// *template strings later on too

// Assignment Operators
let x = 10;
x += 15;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators => always amount to either true or false
console.log(ageZaeem > ageYashfa);
console.log(ageYashfa <= ageZaeem);

// Operator Precedence
// used MDN to explain precedence and left to right vs right to left
