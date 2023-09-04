function solution(score1, score2) {
  let w = Math.max(score1, score2);
  let l = Math.min(score1, score2);
  return (w === 6 && l < 5) || (w === 7 && (l === 5 || l === 6));
}
