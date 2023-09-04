function solution(n) {
  let m = 1;
  let factorial = 1;

  while (factorial < n) {
    m++;
    factorial *= m;
  }

  return factorial;
}
