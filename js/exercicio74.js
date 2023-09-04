function solution(n) {
  return (n + "").match(/.*0[^0]+0*/g) !== null;
}
