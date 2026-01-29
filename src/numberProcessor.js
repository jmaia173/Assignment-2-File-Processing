const fs = require('fs');


// Turn file text into array of numbers
function getNumbers(text) {
  return text.split('\n').map(n => Number(n));
}

// 1. Sum
function calculateSum(numbers) {
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }
  return sum;
}

// 2. Highest
function findMax(numbers) {
  return Math.max(...numbers);
}

// 3. Lowest
function findMin(numbers) {
  return Math.min(...numbers);
}

// 4. Average
function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}


// test

if (require.main === module) {
  const numbersText = fs.readFileSync('data/sample-numbers.txt', 'utf-8');
  const numbers = getNumbers(numbersText);

  console.log('\nNumbers File:');
  console.log('Sum:', calculateSum(numbers));
  console.log('Max:', findMax(numbers));
  console.log('Min:', findMin(numbers));
  console.log('Average:', calculateAverage(numbers));
}

module.exports = {
  getNumbers,
  calculateSum,
  findMax,
  findMin,
  calculateAverage
};