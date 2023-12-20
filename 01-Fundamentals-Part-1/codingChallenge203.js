// Dolphin Scores
const dolphinScore1 = 97;
const dolphinScore2 = 112;
const dolphinScore3 = 101;
// Koala Scores
const koalaScore1 = 109;
const koalaScore2 = 95;
const koalaScore3 = 106;

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
