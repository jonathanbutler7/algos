// day 1
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

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
