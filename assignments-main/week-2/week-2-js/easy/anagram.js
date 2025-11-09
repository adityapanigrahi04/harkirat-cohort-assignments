/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
// sort str1
// sort str2
// if str1 == str2 then return true
// else return false

function isAnagram(str1, str2) {
  let string1 = sorting(str1);
  let string2 = sorting(str2);

  return string1 === string2;
}
function sorting(str) {
  str = str.toLowerCase().split("").sort().join("").replaceAll(" ", "");
  return str;
}

// const ans = isAnagram("abbc", "babc");
// console.log(ans);

module.exports = isAnagram;
