/*
Problem 1 - Multiples of 3 and 5

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

let sum = 0;
const LIMIT = 100000000;

for (let index = 0; index < LIMIT; index++) {
  if (index % 3 === 0 || index % 5 === 0) {
    sum += index;
  }
}

console.log('== 1');
console.log({
  sum
});
console.log('1 == ');

// You are the 965,120th person to have solved this problem.
// This problem had a difficulty rating of 5%.
