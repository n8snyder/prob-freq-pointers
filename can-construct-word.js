"use strict";

/** compares two strings and returns boolean if the first string can be
 created using letters from the second string
 */
function canConstructWord(word, letters) {
  // input: a word, some letters
  // output: boolean
  if (!letters) return false;

  let wordFreqs = createFrequencyCounter(word);
  let lettersFreqs = createFrequencyCounter(letters);

  for (let key in wordFreqs) {
    if (lettersFreqs[key]) {
      if (!(lettersFreqs[key] >= wordFreqs[key])) {
        return false;
      }
    }
  }
  return true;
}

/** takes an iterable and returns an object with each element as key
 * and its corresponding value as frequency */
function createFrequencyCounter(array) {
  let freqs = {};

  for (let val of array) {
    let valCount = freqs[val] || 0;
    freqs[val] = valCount + 1;
  }

  return freqs;
}

console.log(canConstructWord("aa", "abc"));
// false -- can't build "aa" with only 1 "a"

console.log(canConstructWord("abc", "dcba"));
// true -- can build "abc" with letters "abcd"

console.log(canConstructWord("aabbcc", "bcabcaddff"));
// true -- can build "aabbcc" with those letters
