// algo problems i have memorized or am working to memorize

// ====================================
// RECURSION
// ====================================

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

reverse('smhtirogla'); // 'algorithms'

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

isPalindrome('racecar'); // true
// ====================================
// FREQUENCY COUNTER
// ====================================

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

twoSum([1, 2, 3, 4, 5, 6], 7); // [ 2, 3 ]

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

isAnagram('antagram', 'ansagram'); // false

// ====================================
// MULTIPLE POINTERS
// ====================================

function sumZero(arr) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[right] + arr[left];
    if (sum === 0) return true;
    if (sum > 0) right--;
    if (sum < 0) left++;
  }
  return false;
}

sumZero([-1, 1, 2, 3, 4, 5, 6]);
