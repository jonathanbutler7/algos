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

// point of big O is assuming as n grows, we assume the input n is going to grow

// RULES OF THUMB
// Most primitive things like booleans, numbers, undefined, null, and Javascript are constant
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

sum([0, 1, 2, 3]);

function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
} // as arr length grows (the input approaches infinity) arr gets longer in proportion to length of input. so space taken up is direction proportionate to n

double([1, 2, 3]); // [ 2, 4, 6 ]
