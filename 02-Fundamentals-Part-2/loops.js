"use strict"; // Treat all code as newer version
for (let i = 0; i < 10; i++) {
  console.log(i + 1);
}

let i = 1;
while (i <= 10) {
  console.log(i + 10);
  i++;
}

do {
  console.log(i + 10);
  i++;
} while (i <= 90);
// console.log(j); // is outside the scope of 'j', hence 'j' is undefined
