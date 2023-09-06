function solution(A, a, b) {
  const sumRow = A[a].reduce((acc, val) => acc + val, 0); // Soma os elementos na linha a

  const columnB = A.map((row) => row[b]); // Extrai a coluna b
  const sumColumn = columnB.reduce((acc, val) => acc + val, 0); // Soma os elementos na coluna b

  const sum = sumRow + sumColumn - A[a][b]; // Soma total, subtraindo o elemento duplicado

  return sum;
}
