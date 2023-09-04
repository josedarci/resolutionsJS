function solution(inputArray) {
  let moves = 0;

  for (let i = 1; i < inputArray.length; i++) {
    if (inputArray[i] <= inputArray[i - 1]) {
      const diff = inputArray[i - 1] - inputArray[i] + 1;
      moves += diff;
      inputArray[i] += diff;
    }
  }

  return moves;
}
