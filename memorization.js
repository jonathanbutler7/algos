// algo problems i have memorized or am working to memorize

// RECURSION

function reverse(str) {
  if (str.length === 1) return str;
  return reverse(str.slice(1)) + str[0];
}

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function twoSum(arr, target) {
  const numIndices = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - nums[i];
    if (numIndices[complement]) return [numIndices[complement], i];
    numIndices[arr[i]] = i;
  }
  return [];
}

twoSum([1, 2, 3, 4, 5, 6], 11);
