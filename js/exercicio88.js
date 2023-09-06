function solution(matrix) {
  const n = matrix.length;

  for (let i = 0; i < n / 2; i++) {
    [matrix[i][i], matrix[n - 1 - i][n - 1 - i]] = [
      matrix[n - 1 - i][n - 1 - i],
      matrix[i][i],
    ];

    [matrix[i][n - 1 - i], matrix[n - 1 - i][i]] = [
      matrix[n - 1 - i][i],
      matrix[i][n - 1 - i],
    ];
  }

  return matrix;
}
