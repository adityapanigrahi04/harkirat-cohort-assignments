/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let isTrue = false;
  if (str.length == 0 || str.length == 1) {
    return true;
  } else {
    isTrue = checkPalindrome(str);
  }

  return isTrue;
}

function checkPalindrome(str) {
  let str1 = str
    .replace(/[^\w]|_/g, "")
    .toLowerCase()
    .split("");
  let str2 = str
    .replace(/[^\w]|_/g, "")
    .toLowerCase()
    .split("");

  str2.reverse();

  str1 = str1.join("");
  str2 = str2.join("");

  if (str1 == str2) {
    return true;
  }

  return false;
}

module.exports = isPalindrome;
