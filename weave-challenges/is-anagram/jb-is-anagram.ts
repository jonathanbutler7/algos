/**
 * Write a function that accepts 2 strings
 * and checks to see if they are anagrams.
 * An anagram is a word or phrase that contains
 * the same letters as another.
 *
 * Make sure to consider bad inputs (< 2 args, non-strings).
 *
 * Examples:
 *   rat | tar
 *   Tom Marvolo Riddle | I am Lord Voldemort
 * @param {string} str1
 * @param {string} str2
 * @returns {boolean}
 */
function isString(str) {
  if (typeof str === "string") return true;
  return false;
}

function formatString(str) {
  if (isString(str)) {
    return str.toLowerCase().replace(/\s/g, "");
  }
  return false;
}

function sortString(str) {
  return str.split("").sort().join("");
}

export function isAnagram(str1, str2) {
  // remove spaces and convert strings to lower case so letters of strings can be sorted and compared
  // formatString also has a helper function (isString) that tests the input type
  const str1NoSpaces = formatString(str1);
  const str2NoSpaces = formatString(str2);

  // if the input is not a string, isString returns false and the function can end and return false
  if (!str1NoSpaces || !str2NoSpaces) return false;

  // if the two strings have a different number of letters, return false
  if (str1NoSpaces.length !== str2NoSpaces.length) return false;

  // this part of the function is reached if both inputs are strings with the same length
  // sortString splits the string into an array, sorts it alphabetically, and joins it
  const str1Sorted = sortString(str1NoSpaces);
  const str2Sorted = sortString(str2NoSpaces);

  // are the strings are identical?
  return str1Sorted === str2Sorted;
}
