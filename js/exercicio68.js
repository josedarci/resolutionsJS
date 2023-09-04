Solução:
function solution(cell) {
  const x = cell.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
  const y = parseInt(cell[1]);

  const dx = [2, 1, -1, -2, -2, -1, 1, 2];
  const dy = [1, 2, 2, 1, -1, -2, -2, -1];

  let count = 0;
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx >= 1 && nx <= 8 && ny >= 1 && ny <= 8) {
      count++;
    }
  }

  return count;
}
