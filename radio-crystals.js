function washChunk(chunk) {
  console.log("Transporting and washing");
  return Math.floor(chunk);
}

function solve(input) {
  const [target, ...chunks] = input;

  const canCut = (chunk) => chunk / 4 >= target;
  const cut = (chunk) => chunk / 4;

  for (let chunk of chunks) {
    while (chunk > target) {
      // Cut...
      if (canCut(chunk)) {
        let counter = 0;

        while (canCut(chunk)) {
          chunk = cut(chunk);
          counter++;
        }

        console.log(`Cut x${counter}`);
        chunk = washChunk(chunk);
      }

      // Lap...
      if (chunk - chunk * 0.2 >= target) {
        let counter = 0;

        while (chunk - chunk * 0.2 >= target) {
          chunk -= chunk * 0.2;
          counter++;
        }

        console.log(`Lap x${counter}`);
        chunk = washChunk(chunk);
      }

      // Grind...
      if (chunk - 20 >= target) {
        let counter = 0;

        while (chunk - 20 >= target) {
          chunk -= 20;
          counter++;
        }

        console.log(`Grind x${counter}`);
        chunk = washChunk(chunk);
      }

      // Etch...
      if (chunk - 2 >= target - 1) {
        let counter = 0;

        while (chunk - 2 >= target - 1) {
          chunk -= 2;
          counter++;
        }

        console.log(`Etch x${counter}`);
        chunk = washChunk(chunk);
      }
    }

    if (chunk + 1 === target) {
      chunk += 1;
      console.log("X-ray x1");
    }

    console.log(`Finished crystal ${target} microns`);
  }
}

solve([1375, 50000]);
