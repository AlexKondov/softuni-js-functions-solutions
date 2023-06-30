function sum(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function solve(x, y, z) {
  return subtract(sum(x, y), z);
}

console.log(solve(23, 6, 10));
