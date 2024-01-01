const jonasArray = [
  "Jonas",
  "Schmedtmann",
  2038 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
]; // bundle of anonymous expressions, no other way to access other than their order no.

//* Object literal syntax
const jonas = {
  // Bundle of key:value pairs, or key:expression pairs
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: false,
  // Object Methods
  showJonas: function () {
    console.log(`Full Name: ${this.firstName} ${this.lastName}`);
    console.log(`Age: ${this.age}`);
    console.log(`Job: ${this.job}`);
    console.log(
      `Friends: ${this.friends[0]}, ${this.friends[1]}, ${this.friends[2]}.`
    );
  },

  calcAge: function () {
    this.age = 2037 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    // Challenge
    console.log(
      `${this.firstName} is a ${this.age}-year old ${this.job} and he has ${
        this.hasDriversLicense ? "a" : "no"
      } driver's license.`
    );
  },
};

// Default way of showing an object
console.log(jonas);

// Different notations used to access pairs of an object
console.log(jonas.firstName, jonas.lastName); // Dot notation
console.log(jonas["birthYear"]); // Bracket notation, it can accept any expression, in case the pair to be accessed isn't pre determined as in the case of user input

// Example to show usefulness of bracket notation
const interestedIn = prompt(
  "What do you want to know about Jonas? Choose between firstName, lastName, birthYear, job and friends."
);

console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
  console.log(jonas[interestedIn]);
} else {
  console.log("Invalid request!");
}

//* Adding new properties to objects
jonas.location = "Portugal";
jonas["twitter"] = "@jonasschmedtman";
console.log(jonas);

// Challenge accepted
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`
);

//* Object Methods
// User defined way of showing the object
console.log(jonas.calcAge());
console.log(jonas["calcAge"]());
console.log(jonas.age);

jonas.showJonas();
jonas["showJonas"]();

jonas.getSummary();
