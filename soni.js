function miniMaxSum(arr) {
  let sumMin = 0;
  let sumMax = 0;

  // Find sumMin by excluding the last element
  for (let i = 0; i < arr.length; i++) {
      if (i !== arr.length - 1) {
          sumMin += arr[i];
      }
  }

  // Find sumMax by excluding the first element
  for (let i = 1; i < arr.length; i++) {
      sumMax += arr[i];
  }

  console.log(`${sumMin} ${sumMax}`);
}

const arr = [1, 2, 3, 4, 5];
miniMaxSum(arr);
