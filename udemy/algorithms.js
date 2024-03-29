// 5. timing our code

function addUpTo(n) {
  let total = 0;
  for (i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
// ^ this function has however many operations as n
// So in this case as and grows the number of operations grow roughly in proportion with n

function addUpTo(n) {
  return (n * (n + 1)) / 2;
}
// ^ this function has 3 operations

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

// 6. Counting operations
// it's better to count operations than seconds to compare performance

// 8. Official intro to big 0
// O(f(n))
// We say that an algorithm is Big O of f if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases

// when time increases, what happens to the graph?
// https://rithmschool.github.io/function-timer-demo/

// The one-liner addUpTo Always 3 operations, so O(1), which means as n grows, the runtime is not impacted

// The for loop addUpTo is eventually bounded by a multiple of n (say, 10n). Doesn't matter of it's 1n, 5n, 50n.

function countUpAndDown(n) {
  console.log('Going up');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top\nGoing down');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down, bye');
}

function printAllPairs(n) {
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
} // run time ^ is O(n^2) because each for loop is O(n) -quadratic

// 9. Simplifying Big O

// Constants don't matter:
// fast O(2n) -> O(n)
// fastest O(500) -> O9(1) (constant run time)
// slowest O(13n^2) -> O(n^2) (don't need the constant of 13)

// O(n + 10) -> O(n)
// O(1000n + 50) -> O(n)
// O(n^2 + 5n + 8) -> O(n^2)

// Big O Shorthands
// 1. Arithmetic operations are constant
// 2. Var assignment is constant
// 3. Accessing elms in an array (by index) or objects (by key) is constant
// 4. In a loop, the complexity is the loop length times complexity of what happens inside loop

function logAtLeastFive(n) {
  for (var i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
} // O(n)

function logAtMostFive(n) {
  for (var i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
} // O(1) rather than O(5), we simplify to O(1)

// 10. Space complexity aka aux space complexity
// auxiliary space complexity: space required by the algorithm only, not including space taken up by the inputs

// point of big O is assuming as n grows, we assume the input n is going to grow. it also allows you to measure the algorithm independent of how fast the computer is that it's running on

// RULES OF THUMB
// Most primitive things like booleans, numbers, undefined, null, and Javascript are constant O(1)
// Strings require O(n) space (where n is string length)
// a 50 char string takes up 50 times more space than a single char string
// Reference types (arrays, objects) are generally O(n) where n is the length (for arrays) or the number of keys (for objects)

function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
} // this has two vars, `total` and `i`
// it's O(1) space because we aren't adding to the space that n takes up

sum([0, 1, 2, 3]); // -> 6

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
} // as arr length grows (the input approaches infinity) arr gets longer in proportion to length of input. so space taken up is direction proportionate to n // O(n)

double([1, 2, 3]); // [ 2, 4, 6 ]

// 11. Logs

// log2(8) = 3 // log base 2 of 8 equals 3 -> 2^3 = 8
// what that calculates is 2 to what power = 8
// 2 * 2 * 2 = 8
// log === log2

// the binary logarithm of a number roughly measures the number of times you can divide that number by 2 before y ou get a values that's less than or equal to 1

// (8 / 2) = 4
// (4 / 2) = 2
// (2 / 2) = 1
// log(8) = 3 // we divided by 2 3 times

// (25 / 2) = 12.5
// (12.5 / 2) = 6.25
// (6.25 / 2) = 3.125
// (3.125 / 2) = 1.5625
// (1.5625 / 2) = 0.7
// log(25) equalish to 4.64

// logs used in searching, sorting, recursion

// ================================================
// SECTION 3
// ================================================

// OBJECTS are unordered key/value pairs
// good for fast access insertion/removal
// Insertion, Removal, Access is O(1), searching is O(n)

// Object.keys,values,entries are O(n). hasOwnProperty = O(1)

// ARRAYS are good when you need order. not optimized if you don't need order

// Big O of arrays Insertion,removal: it depends. Search: O(n). Access O(1)

// inserting new element to an array on the end is easy. but inserting or removing at the beginning, it's O(n) because all the indices of the array have to be adjusted.

// ================================================
// SECTION 4
// ================================================

// INTRO TO PROBLEM SOLVING 4.18

// what is an algorithm? process or set of steps to accomplish a certain task.
// almost everything you do involves some sort of algorithm

// How do you get better?
// 1. Devise a plan for solving problems
// 2. Master common problem solving patterns

// 4.19

// 1. Restate the problem in your own words
// 2. What are the inputs that go into the problem?
// 3. What are the outputs that go into the problem?
// 4. Can the outputs be determined from the inputs?
// 5. How should I label the important pieces of data that are part of the problem?

// start with simple examples
// progress to more complex examples
// explore examples with empty inputs
// explore examples with invalid inputs

// explicitly write out the steps you need to take
// this forces you to think about the code before you write it

// 4.21

// SIMPLIFY
// find the core difficulty in what you're trying to do
// temporarily ignore that difficulty
// write a simplified solution
// incorporate that difficulty back in

// write a function which takes in a string and returns counts of each character in the string.

// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h: 1, e:1, l:2, o:1}
// charCount(""); // null? false? undefined?
let str = 'Your PIN number is 1234!';
function charCount(str) {
  // do something
  // return an object with keys that are alphanumeric lowercase characters in the string
}

function charCount(str) {
  // make an object to return at end
  // loop over string, for each character... lowercase it
  // if char is num/letter & a key in object, add 1 to count
  // if char is num/letter & not in object, add it and set value to 1
  // if character is something else (space, period, etc.)don't do anything
  // return object at end
}

function charCount(str) {
  let result = {};
  for (i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
}

charCount(str);

function charCount(str) {
  let obj = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
}

// function charCount(str) {
//   let obj = {};
//   for (var char of str) {
//     char = char.toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

function charCount(str) {
  const obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

// - Understand the problem
// - Explore concrete examples
// - Break it down
// - Solve/simplify
// - Look back and refactor

// ================================================
// SECTION 5
// ================================================

// 5.27
// FREQUENCY COUNTERS
// this pattern uses objects or sets to collect values/frequencies of values

// can often avoid the need for nested loops of O(n^2) operations with arrays/strings

same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [4, 9]); // false
same([1, 2, 3], [4, 4, 1]); // false (must be same frequency)

// naive approach ->
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (num1 of arr1) {
    let correctIndex = arr2.indexOf(num1 ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 3, 2], [4, 1, 4, 9]);
// 2 SEPARATE LOOPS IS VASTLY BETTER THAN 2 NESTED LOOPS

// better approach

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// 5.28

// given 2 strings, write a function to determine if the second string is an anagram of the first.

function validAnagram(one, two) {
  if (one.length !== two.length) return false;
  const lookup = {};
  for (let val of one) {
    let letter = val;
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  for (let val of two) {
    let letter = val;
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

validAnagram('awesome', 'awesome8');

// 5.30

// MULTIPLE POINTERS PROGRAM
// write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// naive solution
function sumZero(arr) {
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 0) {
        return [i, j];
      }
    }
    return undefined;
  }
}

// better solution

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

let long = [-3, -2, -1, 0, 1, 2, 3];
let short = [1, 2, 3];
sumZero(short);

// count unique values challenge

// ================================================
// SECTION 6
// ================================================

// Implement a function called countUniqueValues which accepts a sorted array and counts the unique values in the array.

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
} // O(n) time

// 5.34 SLIDING WINDOW

// useful when keeping track of a subset of data in a larger set of data

// Write a function called maxSubarraySum which accepts an array of integers and a number called n. the function should calculate the maximum sum of n consecutive elements in the array.

//naive solution:

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// sliding window solution:

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([4, 2, 1, 6], 1); // 6
// in the example below, i walk through each iteration of the loop and console.log it out so i can understand it better. i'm still confused about PEMDAS;

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    console.log('arr[i]', arr[i]);
    maxSum += arr[i];
    console.log('maxSum', maxSum);
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //    i=2    3    -      1       +    3     = 5
    //    i=3    5    -      2       +    4     = 7
    //    i=4    7    -      3       +    5     = 9
    //    i=5    9    -      4       +   -1     = 4
    //    i=6    4    -      5       +   -2     = -3
    // console.log(arr[i-num], arr[i])
    console.log('tempSum', tempSum);
    maxSum = Math.max(maxSum, tempSum);
    console.log('maxSum', maxSum);
  }
  return maxSum;
}
let arr = [1, 2, 3, 4, 5, -1, -2];
maxSubarraySum(arr, 2);

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    // console.log('arr[i]', arr[i])
    maxSum += arr[i];
    // console.log('maxSum',maxSum)
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    //    i=3    6    -      1       +    4     = 9
    //    i=4    9    -      2       +    5     = 12
    //    i=5    12   -      3       +   -1     = 8
    //    i=6    8    -      4       +   -2     = 6
    console.log(arr[i - num], arr[i]);
    console.log('tempSum', tempSum);
    maxSum = Math.max(maxSum, tempSum);
    // console.log('maxSum', maxSum)
  }
  return maxSum;
}
let arr = [1, 2, 3, 4, 5, -1, -2];
maxSubarraySum(arr, 3);

// SOME EXERCISES

function areThereDuplicates(...args) {
  const lookup = {};
  for (let val of args) {
    if (lookup[val]) {
      lookup[val] += 1;
    } else {
      lookup[val] = 1;
    }
  }
  for (let num in lookup) {
    if (lookup[num] > 1) {
      return true;
    }
  }
  return false;
}
// below is my own solution for the duplicates problem
function duplicates(arr) {
  let counter = {};
  for (i = 0; i < arr.length; i++) {
    if (counter[arr[i]]) return true;
    counter[arr[i]] = 1;
  }
  return false;
}

areThereDuplicates(1, 2, 3, 4, 4);

function averagePair(arr, n) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === n) return true;
    if (avg > n) right--;
    left++;
  }
  return false;
}

averagePair([1, 2, 3], 2.5);

function isSubsequence(s1, s2) {
  let i = 0,
    j = 0;
  while (j < s2.length) {
    if (s1[i] === s2[j]) i++;
    j++;
    if (i === s1.length) return true;
  }
  return false;
}
isSubsequence('abc', 'abraadabrac');
// this solution compares the first letter of str1 and str2. if they're equal it moves to the second letter of each string. if the letters are not equal, it stays on the same letter in str1 and keeps iterating through str2 until it finds another match.
// if it reaches the end of str1 and has found a match for each letter in str2, it returns true. if it has reached the end of str2 but not the end of str1 it returns false.
// DON'T UNDERSTAND THE ONE BELOW

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}

findLongestSubstring('thecatin');

// 5.34 divide and conquer

// tremendously decreases time complexity

// ================================================
// SECTION 7
// ================================================

function countDown(num) {
  if (num === 0) {
    console.log('all done');
    return;
  } else {
    console.log(num.toString());
    num--;
    countDown(num);
  }
}

countDown(5);

function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function reFactorial(num) {
  if (num === 1) return 1;
  return num * reFactorial(num - 1);
}

reFactorial(5);

// ================================================
// SECTION 8
// ================================================

function power(num1, num2) {
  if (num2 === 0) return 1;
  return num1 * power(num1, num2 - 1);
}

// struggled with the one below
function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

productOfArray([1, 2, 3]); // 6
productOfArray([1, 2, 3, 10]); // 60

function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

// struggled with fib

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(4); // 3
fib(10); // 55
fib(28); // 317811
fib(35); // 9227465

// ================================================
// SECTION 9 Bonus CHALLENGING
// Recursion Problems
// ================================================
// COME BACK TO THIS ONE BECAUSE THEY ARE SO HARD

// i made up my own recursion problems

function interpret(command, result = '') {
  if (command.length === 0) return result;
  if (command[0] === 'G') result += command[0];
  if (command[0] === '(' && command[1] === ')') result += 'o';
  if (command[0] === '(' && command[1] === 'a') result += 'al';
  return interpret(command.slice(1), result);
}

interpret('G()()()()(al)');
let str = 'G()()()()(al)';

function returnEvens(arr, result = []) {
  if (arr.length === 0) return result;
  if (arr[0] % 2 == 0) result.push(arr[0]);
  return returnEvens(arr.slice(1), result);
}

returnEvens([1, 4, 3, 2, 5, 6]);

const arr = [12, 45, 76, 43, 76, 98, 5, 31, 4];

function reverseArray(arr, res = []) {
  if (arr.length === 0) return res;
  res.push(arr[arr.length - 1]);
  let removed = arr.pop();
  return reverseArray(arr, res);
}
const arr = [9, 1, 2, 3, 4, 5, 6];
reverseArray(arr);

function pushRecursively(arr, len = 0, even = []) {
  if (len < arr.length) {
    if (arr[len] % 2 === 0) {
      even.push(arr[len]);
    }
    return pushRecursively(arr, ++len, even);
  }
  return even;
}
pushRecursively(arr);

function isPalindrome(str) {
  // if the length of str is 1 return true;
  // if length is 2 and both letters are the same return true
  // if first letter and last letter are the same, run isPalindrome again with first and last letters cut off
  // return false
}

function capitalizeWords(arr) {
  // BASE: if arr.length is 1, return first element of the array converted to upper case
  //
}

// ================================================
// SECTION 10 SEARCHING ALGORITHMS
// ================================================

const lowers = states.map((state) => state.toLowerCase());

function linearSearch(arr, val) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === val.toLowerCase()) return i;
  }
  return -1;
}

linearSearch(lowers, 'texas');

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] === elem) {
    return middle;
  }
  return -1;
}

// SHORTER SOLUTION

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

const arr = [1, 3, 4, 6, 8, 9, 11, 12, 15, 16, 17, 18, 19];
binarySearch(arr, 19);

// longer solution
// function naiveSearch(long, short) {
//   var count = 0;
//   for (var i = 0; i < long.length; i++) {
//     for (var j = 0; j < short.length; j++) {
//       console.log(short[j], long[i + j])
//       if (short[j] !== long[i+j]) {
//         console.log('break')
//         break
//       }
//       if (j === short.length - 1) {
//         console.log('found one')
//         count++;
//       }
//     }
//   } return count;
// }

// shorter solution
function naiveSearch(long, short) {
  var count = 0;
  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch('lorie loledlol', 'lol');

// ================================================
// SECTION 11 BUBBLE SORT ALGORITHMS
// ================================================

// sorting algorithms animations website

function compare(num1, num2) {
  return num1 - num2; // sort ascending
  // return num2 - num1 // sort descending
}

[6, 4, 5, 10].sort(compare);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

['Butler', 'Jonathan', 'Data Structures', 'Algorithms'].sort(compareByLen);

// ================================================
// SECTION 11 BUBBLE SORT
// ================================================

// BUBBLE SORT

// visualgo.net

function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log('one is done');
  }
  return arr;
}

// optimized with noSwaps which breaks out of the loop when noSwaps is true

function bubbleSort(arr) {
  var noSwaps;
  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

const arr = [37, 45, 29, 8, 12, 88, -3];
bubbleSort(arr);

// ================================================
// SECTION 12 SELECTION SORT
// ================================================

// selection sort first places small values into sorted position
// bubble sort first places large values into sorted position

[5, 3, 4, 1, 2];

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    // console.log(arr);
    // console.log('swapping!');
    var temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
    // console.log(arr);
  }
  return arr;
}

// optimized
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      // console.log(arr);
      // console.log(i, lowest);
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
      // console.log(arr);
    }
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17, 1]);

// ================================================
// SECTION 13 INSERTION SORT
// ================================================

// builds up the sort by gradually creating a larger left half which is always sorted

[5, 3, 4, 1, 2];

// start by picking the second elem in the array bc the first is already 'sorted'
// compare second element with one before it and swap if necessary
// continue to the next element & if it's in the incorrect order iterate through the sorted portion to place the element in the correct place

// ================================================
// SECTION 17 RADIX SORT
// ================================================

function getDigit(num, i) {
  return Math.floor((num / Math.pow(10, i)) % 10);
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(arr) {
  let biggest = 0;
  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    biggest = Math.max(biggest, digitCount(num));
  }
  return biggest;
}

function radix(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);
    console.log(nums);
  }
  return nums;
}

radix([23, 345, 5467, 12, 2345, 9852]);
