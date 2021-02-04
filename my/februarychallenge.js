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

function sort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

sort([7, 6, 5, 4, 4, 3, 2, 7]); // [ 2, 3, 4, 4, 5, 6, 7, 7 ]

// feb 3
// https://leetcode.com/problems/longest-palindromic-substring/

// don't really understand how this one is working.

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

function longestPS(str) {
  var maxLength = 1;
  var result = str[0] || '';
  for (right = str.length - 1; right >= 0; right--) {
    if (right + 1 < maxLength) {
      break;
    }
    for (left = 0; left < right; left++) {
      let lengthInView = right - left + 1;
      console.log({ lengthInView, maxLength });
      if (lengthInView > maxLength) {
        const newStr = str.substring(left, right + 1);
        if (isPalindrome(newStr)) {
          maxLength = lengthInView;
          result = newStr;
          break;
        }
      }
    }
  }
  return { result };
}
longestPS('myracecar'); // 'racecar'
longestPS('myracecarym'); // 'myracecarym'
longestPS('myrace'); // m


// https://leetcode.com/problems/palindrome-number/
function reverse(num) {
  let thing = num.toString().split('').reverse().join('');
  if (num < 0) {
    let negRemoved = thing.slice(0, -1);
    return ~Number(negRemoved) + 1;
  }
  return Number(thing);
}

reverse(120); // 21
reverse(123); // 321
reverse(-123); // -321





// https://leetcode.com/list/xzqrtueg/