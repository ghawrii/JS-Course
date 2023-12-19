// DataSet 1

// Mark's data and BMI
const markMass = 78;
const markHeight = 1.69;
const markBMI = markMass / markHeight ** 2;
// John's data and BMI
const johnMass = 92;
const johnHeight = 1.95;
const johnBMI = johnMass / johnHeight ** 2;

// Boolean info on whether or not Mark has a higher BMI
let markHigherBMI = markBMI > johnBMI;

// Printing individual BMI's
console.log("Mark's BMI= " + markBMI);
console.log("John's BMI= " + johnBMI);

// Printing result on console
if (markHigherBMI) {
  console.log("For dataset 1, Mark has a higher BMI than John.");
} else {
  console.log("For dataset 1, John has a higher BMI than Mark.");
}
