function calculateFactorial(num) {
  let sum = 1;

  for (let index = 1; index <= num; index++) {
    sum *= index;
  }

  return sum;
}

function solve(x, y) {
  return (calculateFactorial(x) / calculateFactorial(y)).toFixed(2);
}

console.log(solve(5, 2));
