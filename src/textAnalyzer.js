const fs = require('fs');


// 1. Count words
function countWords(text) {
  const words = text.split(/\s+/);
  return words.filter(word => word.length > 0).length;
}

// 2. Find longest word 
function findLongestWord(text) {
  const words = text.split(/\s+/);
  let longest = '';

  for (let word of words) {

    const cleanWord = word.replace(/[^a-zA-Z]/g, '');

    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}

// 3. Count lines
function countLines(text) {
  return text.split('\n').length;
}


if (require.main === module) {
  const quotesText = fs.readFileSync('data/quotes.txt', 'utf-8');
  const sampleText = fs.readFileSync('data/sample-text.txt', 'utf-8');

  console.log('Quotes File:');
  console.log('Words:', countWords(quotesText));
  console.log('Longest word:', findLongestWord(quotesText));
  console.log('Lines:', countLines(quotesText));

  console.log('\nSample Text File:');
  console.log('Words:', countWords(sampleText));
  console.log('Longest word:', findLongestWord(sampleText));
  console.log('Lines:', countLines(sampleText));
}


// Export functions
module.exports = { countWords, findLongestWord, countLines };
