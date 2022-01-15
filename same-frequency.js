"use strict";

/** check if two positive integers have the same frequency of digits */
function sameFrequency(int1, int2) {
  let int1Freq = createFrequencyCounter(int1.toString());
  let int2Freq = createFrequencyCounter(int2.toString());
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
