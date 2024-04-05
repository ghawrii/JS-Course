// Makes it easier for us to write secure JavaScript code
//! strict mode only starts from where this line exists
"use strict";
/**
 * Takes away dynamic typing of variables
 * Restricts the usage of variable names which JS has reserved for future implementations
 * and many other things
 */

//* Functions
/**
 * Reusable pieces of code:-
 *  -Think of them as input/output machines which take input as args and return output in the
 *  end after processing input.
 *
 *  -Well, maybe all of the machines do this, regardless of whether they're analog or digital
 *  machines. Think about this deeply.
 *
 *  -I think JS is also not really an Object Oriented programming language, it is just a functional
 *  language. In the root, JS has a root function which creates a global object, which contains all
 *  the functions and other objects inheriting functions and properties from it.
 *
 *  -This is exactly how computers are implemented too.
 *  The machine, starts a function of taking in input(objects enter), processes it and returns
 *  the processsed output.
 */

logger(); // Hoisting
// Function definition
function logger() {
  // Function body
  console.log("My name is Jonas.");
}

logger(); // Function call
while (false) {
  logger();
}

//* Function declaration
function fruitProcessor(apples, oranges) {
  // Functions always return something, when there is no specified return value, it returns undefined
  return `Juice with ${apples} apples and ${oranges} oranges.`;
}

const appleJuice = fruitProcessor(5, 0); // variables('apples' and 'oranges') are paramters & (5,0) args
console.log(appleJuice);
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//* Function Expression/Anonymous function
/** 
 * In JS functions are just values, they're not a separate type like 
 * strings or boolean, instead they are just values.
 * 
 * 
*/
const fruitProcessor1 = function (apples, oranges) {
  return `Juice with ${apples} apples and ${oranges} oranges.`;
};
console.log(fruitProcessor1(4, 6));

function calcAge1(birthYear) {
  return 2023 - birthYear; // Function declaration, hoisted as a function, can be called before declaration.
}

const calcAge2 = function (birthYear) {
  return 2023 - birthYear; // Function expression,not hoisted,calcAge2 is hoisted instead
};

// Function expressions are preferred because they enforce a structure in our code.
/**
 * ? What are behind the scenes differences between a function declaration and an expression?
 * ? Since in JS, values have data type and not the variables, how does it reserve space in memory without
 * ? knowing how much it'll need?
 */

//* Arrow Function Expressions
/**
 * Syntactical sugar for writing function expressions easily, usually used for writing
 * one liner functions
 */

// Returns in arrow functions happens implicityly, no return statement needed.
const calcAge3 = (birthYear) => 2023 - birthYear; // takes the left side as args, returns the right side expression automatically
console.log(calcAge3(1998));

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  //   return 65 - age; // return can only be omitted in one liners.
  return `${firstName} retires in ${65 - age} years.`;
};
console.log(yearsUntilRetirement(1998, "Zaeem"));
