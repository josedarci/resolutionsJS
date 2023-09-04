// A função solution recebe uma tabela em formato de matriz (table) e as coordenadas (coords) das células a serem unidas.
function solution(table, coords) {
  // Converte cada linha da tabela em um array de caracteres.
  table = table.map((row) => row.split(""));

  // Encontra as posições das divisões de linhas e colunas.
  // rdivs armazena os índices das divisões de linhas (posições dos '+' no começo de cada linha).
  const rdivs = table
    .map((row, i) => (row[0] === "+" ? i : -1))
    .filter((i) => i !== -1);
  // cdivs armazena os índices das divisões de colunas (posições dos '+' na primeira linha).
  const cdivs = table[0]
    .map((col, i) => (col === "+" ? i : -1))
    .filter((i) => i !== -1);

  // Calcula as coordenadas das células a serem unidas.
  const x1 = rdivs[coords[1][0]];
  const y1 = cdivs[coords[0][1]];
  const x2 = rdivs[coords[0][0] + 1];
  const y2 = cdivs[coords[1][1] + 1];

  // Itera pelas células dentro da área especificada pelas coordenadas.
  for (let x = x1 + 1; x < x2; x++) {
    // Verifica se a célula está na borda esquerda e substitui o '+' por '|'.
    if (y1 === 0) {
      table[x][y1] = "|";
    }
    // Verifica se a célula está na borda direita e substitui o '+' por '|'.
    if (y2 === table[0].length - 1) {
      table[x][y2] = "|";
    }

    // Itera pelas células internas da área.
    for (let y = y1 + 1; y < y2; y++) {
      // Verifica se o caractere é '|', '-', ou '+' e substitui por espaço.
      if (table[x][y] === "|" || table[x][y] === "-" || table[x][y] === "+") {
        table[x][y] = " ";
      }
    }
  }

  // Itera pelas células na borda superior e inferior da área.
  for (let y = y1 + 1; y < y2; y++) {
    // Verifica se a célula está na borda superior e substitui o '+' por '-'.
    if (x1 === 0) {
      table[x1][y] = "-";
    }
    // Verifica se a célula está na borda inferior e substitui o '+' por '-'.
    if (x2 === table.length - 1) {
      table[x2][y] = "-";
    }
  }

  // Converte cada linha da tabela de volta para strings e retorna a tabela modificada.
  return table.map((row) => row.join(""));
}
