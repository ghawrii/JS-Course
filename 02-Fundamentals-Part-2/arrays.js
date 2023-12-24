/**
 * *Array: an object that contains a bundle of expressions
 * *and methods to handle those expressions.
 * -Only primitive values are immutable due to const, and arrays
 * are not primitive. An array declared with const can't be entirely
 * replaced but single elements of arrays can be changed. Basically,
 * the pointer that actually constitutes the array can't be mutated.
 *
 */
// Declaring simple arrays
const friends = ["Shakoor", "Hamza", "Rana"];
console.log(friends[0]);
console.log(friends.length);

const khachan = new Array("khach no.1", "khach no.2", "waddi khach");
const chotiKhach = khachan[0];

const bundleExpressions = [friends, khachan];
console.log(bundleExpressions[0][bundleExpressions[0].length]); // undefined outside bounds

// Exercise
const age = function (birthYear) {
  return 2023 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2008];
// console.log(age(years)); // NaN
// console.log(years + 10); // seems like coercion depends on the second operand
const ages = [
  age(years[0]),
  age(years[1]),
  age(years[2]),
  age(years[3]),
  age(years[4]),
];
console.log(ages);

//* Basics Array methods

// Add elements
const newLength = friends.push("Bill Gates"); // adds an element at the end of the array, returns new length
console.log(friends);
console.log(newLength);

friends.unshift("Insert at beginning");
console.log(friends);

// Remove elements
console.log(friends.pop()); // opposite of push, returns the popped element
console.log(friends.shift()); // opposite of unshift, returns shifted element
console.log(friends);
friends.push(23);

console.log(friends.indexOf("Hamza"));
console.log(friends.indexOf("bob"));
console.log(friends.includes("Shakoor"));
console.log(friends.includes("23")); // checks with ===
