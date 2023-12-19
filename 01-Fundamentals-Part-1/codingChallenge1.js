// DataSet 2

// Mark's data and BMI
const markMass = 95;
const markHeight = 1.88;
const markBMI = markMass / markHeight ** 2;
// John's data and BMI
const johnMass = 85;
const johnHeight = 1.76;
const johnBMI = johnMass / johnHeight ** 2;

// Boolean info on whether or not Mark has a higher BMI
let markHigherBMI = markBMI > johnBMI;

// Printing individual BMI's
console.log("Mark's BMI= " + markBMI);
console.log("John's BMI= " + johnBMI);

// Printing result on console
if (markHigherBMI) {
  console.log("For dataset 2, Mark has a higher BMI than John.");
} else {
  console.log("For dataset 2, John has a higher BMI than Mark.");
}
