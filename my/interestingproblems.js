// i encountered this problem in a mock interview with a friend

// normal: hello (<=2)
// expressive: helllooooo (>=3)
// potato
// poootato
// keep track of indeces, what letter you're currently looking at, and starting index of that letter

function getTriples(str) {
  let indices = [];
  let current = str[0];
  let startingIndex = 0;
  for (let i = 1; i < str.length + 1; i++) {
    if (current !== str[i]) {
      if (i - startingIndex >= 3) {
        indices.push([startingIndex, i - 1]);
      }
      current = str[i];
      startingIndex = i;
    }
  }
  return indices;
}

getTriples('helllooooo');

// my friend scott's solution to the twosum problem

function twoSum(nums, target) {
  const numIndices = {};
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    let complement = target - num;
    let indexOfComplement = numIndices[complement];
    if (indexOfComplement !== undefined) {
      return [indexOfComplement, i];
    } else {
      numIndices[num] = i;
    }
  }
  return [];
}

twoSum([1, 2, 3, 4, 5, 6], 7);

function isAnagram(s1, s2) {
  const lookup = {};
  if (s1.length !== s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    let letter = s1[i];
    lookup[letter] ? lookup[letter]++ : (lookup[letter] = 1);
  }
  for (let i = 0; i < s2.length; i++) {
    let letter = s2[i];
    if (!lookup[letter]) return false;
    lookup[letter]--;
  }
  return true;
}

isAnagram('antagram', 'ansagram');

function isPalindrome(num) {
  let str = num.toString();
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

isPalindrome(121); // true
isPalindrome(-121); // false

function divideAndConquer(arr, targ) {
  let min = 0;
  let max = arr.length - 1;
  while (min <= max) {
    let middle = Math.floor((max + min) / 2);
    let currentVal = arr[middle];
    if (currentVal < targ) min = middle + 1;
    else if (currentVal > targ) max = middle - 1;
    else return middle;
  }
  return -1;
}
// ^^ Log(N)
divideAndConquer([0, 1, 2, 3, 4, 5, 6], 1); // 1
divideAndConquer([1, 2, 3, 4, 5], 5); // 4
divideAndConquer([2, 3, 4, 6, 8, 10, 11], 11); // 6

// * Write a function:
// function solution(A);
// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.
// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.
// Given A = [1, 2, 3], the function should return 4.
// Given A = [−1, −3], the function should return 1.
// Write an efficient algorithm for the following assumptions:
// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].
// possible to use binary search



// https://leetcode.com/problems/palindrome-number/submissions/
