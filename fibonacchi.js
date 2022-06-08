
// 1, 1, 2, 3, 5, 8, 13
// f(n) = f(n-1) + f(n-2)
function fibonacchi(n) {
  if (n < 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }

  return fibonacchi(n - 1) + fibonacchi(n - 2)
}

function iterFibonacchi(n) {
  if (n <= 0) {
    return 0;
  }
  if (n <= 2) {
    return 1;
  }
  let prev = 1;
  let result = 1;
  for (let i = 0; i < n - 2; i++) {
    let tmp = result;
    result += prev;
    prev = tmp;
  }
  return result
}

console.log(fibonacchi(7))
console.log(iterFibonacchi(7))