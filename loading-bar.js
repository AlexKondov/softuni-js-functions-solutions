function printLoadingBar(percentage) {
  const percentageNumber = percentage / 10;
  const bar = "%".repeat(percentageNumber) + ".".repeat(10 - percentageNumber);

  if (percentage === 100) {
    console.log("100% Complete");
    console.log(`[${bar}]`);
  } else {
    console.log(`${percentage} ${bar}`);
    console.log("Still loading");
  }
}

printLoadingBar(50);
