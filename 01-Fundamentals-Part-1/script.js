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

// *Strings
// Basics
const firstName = "Hafiz Muhammad Zaeem";
const job = "Software Engineer";
const zaeem =
  "I'm " + firstName + ", a " + ageZaeem + " years old " + job + "!";
console.log(zaeem);

// Template literals => ES6
const zaeemNew = `I'm ${firstName}, a ${ageZaeem} years old ${job}!`;
console.log(zaeemNew);

// Multi line strings
console.log(
  "String with \n\
multiple \n\
lines"
);

// Multi line template literals
console.log(`String with 
multiple
lines`);

// *Control Flow

const driverAge = 15;
// Checks whether a condition is fulfilled and runs the corresponding block of code
if (driverAge >= 18) {
  console.log("The driver can start learning for driving license! 🚗");
} else {
  const yearsLeft = 18 - driverAge;
  console.log(
    `The driver is not old enought yet! Wait another ${yearsLeft} years or the police will arrive.🚓`
  );
}

if (birthYearZaeem <= 2000) {
  const century = "20th";
  console.log(century); // Because const is blocked scoped
} else {
  const century = "21st";
  console.log(century); // Because const is blocked scoped
}

//* Type Conversion and Coercion
/* 
  Conversion is when you manually change the type of a value
  Coercion is when JS automatically or implicityly changes the type of a value
*/

//* Conversion
//! JS can only convert to and from three types, Boolean(), Number(), String()

// String to number
const inputYear = Number("1998");
console.log(inputYear + 18);
console.log(Number("Zaeem")); // NaN => when an operation involving numbers does not produce a new number
console.log(typeof NaN); // number => it is still somehow a number but an invalid number
console.log(Number(false), Number(true));

// Numbe to string
console.log(String(23), 23);
console.log(String(false), String(true));

// Number and string to boolean
/*
  Truthy values: which convert to true when converted to boolean through Boolean()
  Falsy values: vice versa, in JS, only 5 falsy values: 0,'',undefined, null, NaN
  Everything else is a truthy value
*/
console.log(
  Boolean(0),
  Boolean(""),
  Boolean(undefined),
  Boolean(null),
  Boolean(NaN)
); // Falsy
console.log(Boolean(1), Boolean(2), Boolean("a"), Boolean("b"), Boolean(23)); // Truthy

// *Coercion
/* Happens whenever an operator is dealing with values of different types
  So, JS then behind the scenes converts type of one value to type of the 
  other value so that the operation can then be performed
*/
console.log("I am a " + 23 + " years old developer!"); // Num to str with '+'
console.log("23" - "10" - 3); // Str to Num with '-'
console.log("23" * "2"); // str to num with '*'
console.log("23" / "2"); // str to num with '/'
/* Coercion allows us to write a lot less and a lot more readable code
 ! When trying to anticipate the result of coercion, go operator to oprator
*/

//* Equality Operators
if (age === 31) {
  // No type coercion, always use this, forget about the other one
  console.log("Congratulations! You just became an adult 💂‍♂️");
}
if (age == 31) {
  // Forget about its existence
  console.log("Congratulations! You just became an adult 💂‍♂️ (loosely)");
}

// const favorite = Number(prompt("What's your favorite number?"));
const favorite = 23;
console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("Cool! 23 is an amazing prime number.");
} else if (favorite === 7) {
  console.log("Cool! 7 is also an amazing number");
} else {
  console.log("Number is neither 23 nor 7");
}

//* Logical Operators
const hasDriversLicense = true;
const hasGoodVision = false;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
console.log(!hasGoodVision);

const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
if (shouldDrive) {
  console.log("Sarah is eligible to drive");
} else {
  console.log("Sarah is not eligible to drive");
}

const isTired = true;
console.log(hasDriversLicense || (hasGoodVision && isTired));

//* Switch Statement
const day = "sunday";

switch (
day // Does a strict comparison day === 'monday'
) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;

  case "wednesdsay":
  case "thursday":
    console.log("Write code examples"); // same block will run for the above two values
    break;

  case "friday":
    console.log("Record videos");
    break;

  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend! 😉");
    break;

  default:
    console.log("Not a valid day");
    break;
}

// Writing the same logic in if-else statements
if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples"); // same block will run for the above two values
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend! 😉");
} else {
  console.log("Not a valid day");
}

//* Satements vs Expressions
/**
 * Expression is a piece of code that produce a value.(words)
 * Statements are pieces of code that perform some action but
 * do not produce a value. (full sentences)
 */
const expression = "my feelings";

//* Ternary/Conditional Operator
/*
Only one line of code can be executed for true and false conditions
respectively, which is why we will always need if-else to execute 
bigger blockks of code, since ternary operator is an expression and 
not a statement whereas if-else is a statement.
*/
age >= 18 ? console.log("You're an adult") : console.log("You're not an adult");

// Ususally used to assgin values to variables conditionally
const isAdult = age >= 18 ? true : false;
isAdult ? console.log("Adult") : console.log("Minor");
