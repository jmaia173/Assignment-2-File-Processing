const {
  getNumbers,
  calculateSum,
  findMax,
  findMin,
  calculateAverage
} = require('../src/numberProcessor');

describe('Number Processor Functions', () => {

  test('converts text into numbers array', () => {
    const text = '5\n10\n15';
    expect(getNumbers(text)).toEqual([5, 10, 15]);
  });

  test('calculates sum correctly', () => {
    expect(calculateSum([5, 10, 15])).toBe(30);
  });

  test('finds max number', () => {
    expect(findMax([5, 10, 15])).toBe(15);
  });

  test('finds min number', () => {
    expect(findMin([5, 10, 15])).toBe(5);
  });

  test('calculates average', () => {
    expect(calculateAverage([5, 10, 15])).toBe(10);
  });

});
