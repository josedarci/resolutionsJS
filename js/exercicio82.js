function solution(inputArray, result) {
  const n = inputArray.length;
  let count = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      const pair1 = inputArray[i];
      const pair2 = inputArray[j];
      let valid = true;

      for (let k = 0; k < result.length; k++) {
        if (pair1[k] !== result[k] && pair2[k] !== result[k]) {
          valid = false;
          break;
        }
      }

      if (valid) {
        count++;
      }
    }
  }

  return count;
}
