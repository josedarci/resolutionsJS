function solution(inputArray, k) {
  let maxSum = 0;

  // Calculate the sum of each consecutive subarray of length k
  for (let i = 0; i <= inputArray.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += inputArray[j];
    }
    maxSum = Math.max(maxSum, sum); // Update the maximum sum
  }

  return maxSum;
}
