// RHAMZ DANIEL RAMOS

'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

// Store the original names and final scores.
const studentNames = ['Ana', 'Ben', 'Carla', 'Daniel', 'Ella'];
const studentScores = [85, 72, 91, 64, 78];

// Store three activity scores for each original student.
const activityScores = [
  [80, 85, 90],
  [70, 72, 74],
  [88, 92, 95],
  [60, 65, 67],
  [75, 78, 81]
];

// Preserve the original names for the activity matrix.
const originalNames = Array.from(studentNames);

console.log('\nPART A: ORIGINAL RECORDS');

// TODO: Use a for loop to display every name and score.
for (let index = 0; index < studentNames.length; index++) {
  console.log(`${index} - ${studentNames[index]}: ${studentScores[index]}`);
}
// done display and score


console.log('\nPART B: ADD NEW STUDENTS');
// TODO: Add Faith and 88 at the end.
// TODO: Add Aaron and 76 at the beginning.
// TODO: Display both arrays and their length.

studentNames.push('Faith');
studentScores.push(88);
studentNames.unshift('Aaron');
studentScores.unshift(76);

console.log("Updated Names: [" + studentNames.join(', ') + "]");
console.log("Updated Scores: [" + studentScores.join(', ') + "]");
console.log("Number of Students: " + studentNames.length);
// done adding new students, scores and number of students


console.log('\nPART C: REMOVE AND REPLACE RECORDS');
// TODO: Remove the first name and score.
// TODO: Remove the last name and score.
// TODO: Find Daniel's index.
// TODO: Remove Daniel and Daniel's score.
// TODO: Insert Grace and 82 at index 2.
// TODO: Display the updated arrays.

studentNames.shift();
studentScores.shift();
studentNames.pop();
studentScores.pop();

const danielIndex = studentNames.indexOf('Daniel');
studentNames.splice(danielIndex, 1);
studentScores.splice(danielIndex, 1);

studentNames.splice(2, 0, 'Grace');
studentScores.splice(2, 0, 82);

console.log("Names: [" + studentNames.join(', ') + "]");
console.log("Scores: [" + studentScores.join(', ') + "]");
// done removing and replacing records


console.log('\nPART D: CLASS STATISTICS');
// TODO: Calculate the total score.
// TODO: Calculate the average score.
// TODO: Find the highest score.
// TODO: Find the lowest score.
// TODO: Display all statistics.

let total = 0;
let highestScore = studentScores[0];
let lowestScore = studentScores[0];

for (let index = 0; index < studentScores.length; index++) {
  total += studentScores[index];

if (studentScores[index] > highestScore) {
    highestScore = studentScores[index];
}
if (studentScores[index] < lowestScore) {
    lowestScore = studentScores[index];
  }
}

let average = total / studentScores.length;

console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highestScore);
console.log("Lowest Score: " + lowestScore);
// done total, highest, average, lowest score yohoo

console.log('\nPART E: PASSING-SCORE ANALYSIS');

// TODO: Use filter to obtain passing scores.
// TODO: Use map to produce Passed or Failed statuses.
// TODO: Use some to check whether at least one student failed.
// TODO: Use every to check whether all students passed.
// TODO: Display all results.

const passingScores = studentScores.filter(function(scores) {
  return scores >= 75;
});
const passingStatus = studentScores.map(function(scores) {
  if (scores >= 75) {
    return "Passed";
  }
  else {
    return "Failed";
  }
});
const failedScore = studentScores.some(function(scores) {
  return scores < 75;
});
const passedScore = studentScores.every(function(scores){
  return scores >= 75;
});

console.log("Passing Scores: [" + passingScores.join(", ") + "]");
console.log("Statuses: [" + passingStatus.join(", ") + "]");
console.log("At Least One Failed: " + failedScore);
console.log("All Students Passed: " + passedScore);
//done for passing scores, status, failed, and passed vamos!!!

console.log('\nPART F: SORT AND SEARCH');

// TODO: Copy the scores using Array.from.
// TODO: Sort the copy from highest to lowest.
// TODO: Search for 91 using includes and indexOf.
// TODO: Display the results.

const copyofStudentScores = Array.from(studentScores);
copyofStudentScores.sort((a, b) => b - a);
const scoreNinetyOne = studentScores.includes(91);
const indexNinetyOne = studentScores.indexOf(91);

console.log("Scores from Highest to Lowest: [ " + copyofStudentScores.join(" , ") + " ]");
console.log("Contains 91: " + scoreNinetyOne);
console.log("Index of 91: " + indexNinetyOne);
// done with copy, sorting and finding 91

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');
// TODO: Use nested loops to process every row and column.
// TODO: Calculate and store each student's activity average.
// TODO: Display activityAverages.

const activityAverages = [];

for (let i = 0;i < activityScores.length; i++) {
  let sum = 0;
  for (let j = 0; j < activityScores[i].length; j++) {
    sum += activityScores[i][j];
  }
  let avg = sum / activityScores[i].length
  activityAverages.push(avg.toFixed(2));
  console.log(originalNames[i] + "'s activity average: " + avg.toFixed(2));
}
 console.log("Activity Averages: [" + activityAverages.join(", ") + "]");
// done averages of each students original name


console.log('\nPART H: TEXT SUMMARY');
// TODO: Use join to display names separated by " | ".z

console.log("Students: " + studentNames.join(" | "));
// done last part woohoo