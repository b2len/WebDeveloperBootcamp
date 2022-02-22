const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}
// ===================================
// USING FOR...IN TO ITERATE AN OBJECT
// ===================================

for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`);
}

// ==============================================
// Using Object methods to iterate
// (turn data into an array and then use for...of)
// ==============================================

let total = 0;
let scores = Object.values(testScores); // turn the value into an array
for (let score of scores) {             // then loop through the array
    total += score;
}
console.log(total / scores.length)

