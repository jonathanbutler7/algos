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
// it's O(1) space becuse we aren't adding to the space that n takes up

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

// INTRO TO PROBLEM SOLVING 4.18

// what is an algorithm? process or set ot steps to accomplish a certain task.
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
// find th core difficulty in what you'er trying to do
// temporarily ignore that difficulty
// write a simplified solution
// incorporate that difficulty back in

// write a function which takes in a string and returns counts of each character in the string.

// charCount("aaaa"); // {a:4}
// charCount("hello"); // {h: 1, e:1, l:2, o:1}
// charCount(""); // null? false? undefined?
let str = "Your PIN number is 1234!"
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
  let result = {}
  for (i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result
}

charCount(str)
