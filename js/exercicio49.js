function solution(n, m) {
  return Math.pow(2, Math.log2((n ^ m) & -(n ^ m)));
}
