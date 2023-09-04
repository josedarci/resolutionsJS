function solution(a, b, n) {
  return (
    n * a * b + ((a + b) * n * (n - 1)) / 2 + (n * (n - 1) * (2 * n - 1)) / 6
  );
}
