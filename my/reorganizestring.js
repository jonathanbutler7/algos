// leetcode.com/problems/reorganize-string/

https: function reorganizeString(str) {
  let counter = {};
  let max = { char: '', frequency: 0 };
  for (char of str) {
    // frequency counter for each char
    counter[char] ? counter[char]++ : (counter[char] = 1);
    // while counting chars, keep track of the most frequent char
    if (counter[char] > max.frequency) {
      max.frequency = counter[char];
      max.char = char;
    }
  } // max = { char: 'a', frequency: 5 }
  
  // if string length is an even number
  if (str.length % 2 === 0) {
    // then check if the most frequent char isn't > 1/2 str.length
    if (max.frequency > str.length / 2) return '';
  }
  if (str.length % 2 !== 0) {
    if (max.frequency > str.length / 2 + 1) return '';
  }
  // finds the index of the midpoint of the string
  const middle = (str.length + 1) / 2;
  // takes a substring of the string starting from index 0 and stopping at the midpoint, and splits it into an array
  const firstHalf = str.substr(0, middle).split('');
  // takes a substring starting from the midpoint and going to the end of the string, and splits it into an array
  const secondHalf = str.substr(middle).split('');
  const result = [];
  // now that the string is sorted and split in two, 
  for (i in firstHalf) {
    result.push(firstHalf[i])
    i < secondHalf.length && result.push(secondHalf[i])
  }
  return result;
}

reorganizeString('aaaaabbbb');