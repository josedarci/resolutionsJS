function solution(comb1, comb2) {
  let c1 = 0;
  let c2 = 0;

  for (const c of comb1) {
    c1 <<= 1;
    if (c === "*") c1 |= 1;
  }

  for (const c of comb2) {
    c2 <<= 1;
    if (c === "*") c2 |= 1;
  }

  c1 <<= 10;

  let best = Infinity;
  for (let m = 0; m < 20; m++) {
    if ((c1 & c2) === 0) {
      const length =
        Math.max(10 + comb1.length, m + comb2.length) - Math.min(10, m);
      if (length < best) best = length;
    }
    c2 <<= 1;
  }

  return best;
}
