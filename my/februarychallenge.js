// feb 1
// https://leetcode.com/problems/longest-substring-without-repeating-characters/
// below is my solution that didn't work but was in the right direction
function longestSubstring(str) {
  let currentIndex = 0;
  let currentLongest = 0;
  let starting = 1;
  let lookup = {};
  for (let i = currentIndex; currentIndex < str.length; i++) {
    let char = str[currentIndex];
    !lookup[char] ? (lookup[char] = 1) : lookup[char]++;
    currentIndex++;
    console.log(lookup);
    if (lookup[char] > 1) {
      currentIndex = i;
      currentLongest = i - (starting + 1);
      console.log(currentLongest);
      starting = i;
      lookup = {};
    }
  }
  return currentLongest;
}

longestSubstring('abcabcbb');

// the below solution works:
function longestSubstring(str) {
  let currentLongest = 0;
  let seen = {};
  let currentIndex = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      currentIndex = Math.max(currentIndex, seen[char]);
    }
    currentLongest = Math.max(currentLongest, i - currentIndex + 1);
    seen[char] = i + 1;
  }
  return currentLongest;
}

// feb 2
// https://leetcode.com/problems/sort-colors/
