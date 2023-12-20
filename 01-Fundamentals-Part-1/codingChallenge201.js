// Dolphin Scores
const dolphinScore1 = 96;
const dolphinScore2 = 108;
const dolphinScore3 = 89;
// Koala Scores
const koalaScore1 = 88;
const koalaScore2 = 91;
const koalaScore3 = 110;

// Sums of scores
const dolphinSum = dolphinScore1 + dolphinScore2 + dolphinScore3;
const koalaSum = koalaScore1 + koalaScore2 + koalaScore3;

// Average scores
const dolphinAvg = dolphinSum / 3;
const koalaAvg = koalaSum / 3;

// Determining and printing results
if (koalaAvg > dolphinAvg) {
  console.log("Koalas win!");
} else if (dolphinAvg > koalaAvg) {
  console.log("Dolphins win!");
} else {
  console.log("It was a draw 😦");
}

// Bonus conditions
if (koalaAvg >= 100 && koalaAvg > dolphinAvg) {
  console.log("Koalas win!");
} else if (dolphinAvg >= 100 && dolphinAvg > koalaAvg) {
  console.log("Dolphins win!");
} else if (koalaAvg < 100 && dolphinAvg < 100) {
  console.log("Both teams disqualified");
} else if (koalaAvg >= 100 && dolphinAvg >= 100 && koalaAvg === dolphinAvg) {
  console.log("It's a draw 😦");
}
