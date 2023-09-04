function solution(n, l, r) {
  const cap = Math.min(n - l, r);
  const sub = Math.max(n - r, l);
  const diff = cap - sub;
  if (diff < 0) {
    return 0;
  }
  return Math.floor((diff + 2) / 2);
}
