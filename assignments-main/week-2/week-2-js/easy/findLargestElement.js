/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

/**
 * Finds the largest element in a numeric array.
 * Returns undefined if the array is empty or not valid.
 */
function findLargestElement(arr) {
  if (arr.length == 0) return undefined;

  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
}

module.exports = findLargestElement;
