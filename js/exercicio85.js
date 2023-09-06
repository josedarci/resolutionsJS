function solution(levelNum, levelHeight) {
  const v = [0, 0, 1];
  for (let i = 0; i < levelNum; i++) {
    for (let j = 0; j < levelHeight; j++) {
      v.push(2 + i + j);
    }
  }
  for (let i = 0; i < levelNum; i++) {
    v.push(levelHeight >> 1);
  }
  const r = [];
  for (let n of v) {
    r.push(" ".repeat(levelNum + levelHeight - n) + "*".repeat((n << 1) | 1));
  }
  return r;
}
