function solution(s) {
  for (let i = 1; i < s.length; i++) {
    if (s.indexOf(s.substring(i)) === 0) {
      return i;
    }
  }
  return s.length;
}
