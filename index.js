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

let t1 = performance.now()
addUpTo(1000000000)
let t2 = performance.now()
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`)

// 6. Counting operations
// it's better to count operations than seconds to compare performance 
