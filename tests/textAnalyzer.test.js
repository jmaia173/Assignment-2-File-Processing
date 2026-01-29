const {
  countWords,
  findLongestWord,
  countLines
} = require('../src/textAnalyzer');

describe('Text Analyzer Functions', () => {

  // -----------------------
  // countWords
  // -----------------------
  test('counts total number of words correctly', () => {
    const text = 'Hello world this is a test';
    expect(countWords(text)).toBe(6);
  });

  test('returns 0 for empty string', () => {
    expect(countWords('')).toBe(0);
  });


  // -----------------------
  // findLongestWord
  // -----------------------
  test('finds the longest word', () => {
    const text = 'The elephant is big';
    expect(findLongestWord(text)).toBe('elephant');
  });

  test('handles punctuation correctly', () => {
    const text = 'Wow! Amazing, incredible.';
    expect(findLongestWord(text)).toBe('incredible');
  });


  // -----------------------
  // countLines
  // -----------------------
  test('counts lines correctly', () => {
    const text = 'Line one\nLine two\nLine three';
    expect(countLines(text)).toBe(3);
  });

  test('single line returns 1', () => {
    expect(countLines('Only one line')).toBe(1);
  });

});
