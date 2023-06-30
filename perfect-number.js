function solve(num) {
  let sum = 0;

  for (let index = 1; index < num; index++) {
    if (num % index === 0) {
      sum += index;
    }
  }

  return sum === num ? "We have a perfect number" : "It's not so perfect";
}

console.log(solve(6));
