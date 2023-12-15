// Rough practice buddies
let a = 10;
let b = 100;
let c = a * b;

console.log(c);
let abc = (a, b) => {
  return a * b;
};
console.log(abc(a, b));

let me = {
  name: "Hafiz Muhammad Zaeem",
  height: 5.4,
  ethnicity: "South Asian",
  profession: "Software Engineer",
  passion: "Penetration testing",
};

let primitive = {
  str: "string",
  number: 123,
  boolean: true,
  undefined: "a reserved memory location with no initialization as of yet",
  null: "e",
};

function showMe() {
  console.log("Full Name: " + me.name);
  console.log("Profession: " + me.profession);
  console.log("Passion: " + me.passion);
}

showMe(me);
