function solution(a0) {
  const sequence = new Set();
  let current = a0;
  let count = 1;

  while (!sequence.has(current)) {
    sequence.add(current);
    let next = 0;
    const digits = current.toString().split("");

    for (let digit of digits) {
      next += Math.pow(parseInt(digit), 2);
    }

    current = next;
    count++;
  }

  return count;
}
