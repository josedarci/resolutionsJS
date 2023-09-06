function solution(a, b) {
  let r = 0;
  for (let x = -a - b; x <= a + b; x++) {
    for (let y = -a - b; y <= a + b; y++) {
      if (2 * (x - y) * (x - y) <= a * a && 2 * (x + y) * (x + y) <= b * b) {
        r++;
      }
    }
  }
  return r;
}
