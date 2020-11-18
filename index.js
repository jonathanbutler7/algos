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
}

// run time ^ is O(n^2) because each for loop is O(n) -quadratic
