"use strict";

/** Determines if a pair of numbers exist which average to the target number */
function averagePair(nums, target) {
  if (!nums) return false;

  const numLookup = new Set();
  for (let n of nums) {
    numLookup.add(n);
  }

  // for (let n of nums) {
  //     if (numLookup.has(target * 2 - n)) {
  //         return true;
  //     }
  // }

  return nums.some(function (num) {
    return numLookup.has(target * 2 - num);
  });
}
