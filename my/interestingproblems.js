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
