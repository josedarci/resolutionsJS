function solution(grid, path) {
  // Loop através dos movimentos especificados no path
  for (const t of path) {
    if (t === "U") {
      // Movimento para cima
      for (let c = 0; c < grid[0].length; c++) {
        // Obtém a coluna atual e aplica a função move
        const col = move(grid.map((row) => row[c]).reverse()).reverse();
        // Atualiza a coluna na matriz grid
        for (let r = 0; r < grid.length; r++) {
          grid[r][c] = col[r];
        }
      }
    } else if (t === "D") {
      // Movimento para baixo
      for (let c = 0; c < grid[0].length; c++) {
        // Obtém a coluna atual e aplica a função move
        const col = move(grid.map((row) => row[c]));
        // Atualiza a coluna na matriz grid
        for (let r = 0; r < grid.length; r++) {
          grid[r][c] = col[r];
        }
      }
    } else if (t === "R") {
      // Movimento para a direita
      for (let r = 0; r < grid.length; r++) {
        // Aplica a função move para a linha atual
        grid[r] = move(grid[r]);
      }
    } else if (t === "L") {
      // Movimento para a esquerda
      for (let r = 0; r < grid.length; r++) {
        // Aplica a função move para a linha atual após inverter e reverter
        grid[r] = move(grid[r].reverse()).reverse();
      }
    }
  }
  return grid;

  // Função para realizar o movimento e combinação das peças
  function move(s) {
    const h = s.filter((val) => val !== 0); // Remove os zeros da linha
    const r = new Array(4).fill(0); // Array para armazenar a linha final
    let y = 3; // Índice para a posição na linha final
    for (let z = h.length - 1; z >= 0; z--) {
      if (z > 0 && h[z] === h[z - 1]) {
        // Se duas peças iguais estiverem lado a lado, elas se combinam
        r[y--] = 2 * h[z];
        z--; // Pula a próxima peça, pois já foi combinada
      } else {
        r[y--] = h[z];
      }
    }
    return r; // Retorna a linha após a movimentação e combinação
  }
}
