// Função principal que recebe a notação e retorna a notação rotacionada
function solution(notation) {
  const initialBoard = notation.split("/"); // Divide a notação em linhas iniciais
  const rotatedBoard = createRotatedBoard(initialBoard); // Cria o tabuleiro rotacionado
  return toNormalNotation(rotatedBoard); // Retorna a notação final em formato normal
}

// Função para criar o tabuleiro rotacionado
function createRotatedBoard(initialBoard) {
  const list = []; // Lista para armazenar o tabuleiro rotacionado
  const sb = []; // Um array temporário para construir as linhas

  // Percorre cada linha do tabuleiro inicial
  for (const row of initialBoard) {
    // Percorre cada "caixa" (peça ou número) da linha
    for (const box of row) {
      if (!isNaN(box)) {
        sb.push("1".repeat(Number(box))); // Se for um número, adiciona a quantidade de espaços vazios especificada
      } else {
        sb.push(box); // Se for uma peça, adiciona a peça
      }
    }
    list.push(sb.join("")); // Adiciona a linha construída à lista do tabuleiro rotacionado
    sb.length = 0; // Limpa o array temporário para a próxima linha
  }

  const transposedList = list[0].split("").map((_, i) =>
    list
      .map((x) => x[i])
      .reverse()
      .join("")
  ); // Transpõe o tabuleiro
  return transposedList; // Retorna o tabuleiro rotacionado
}

// Função para converter a notação do tabuleiro de volta ao formato normal
function toNormalNotation(board) {
  const sb = []; // Array temporário para construir a notação final

  // Percorre cada linha do tabuleiro rotacionado
  for (let i = 0; i < board.length; i++) {
    let j = 0;
    // Percorre cada "caixa" (peça ou número) da linha
    while (j < board[i].length) {
      if (isNaN(board[i][j])) {
        sb.push(board[i][j]); // Se for uma peça, adiciona a peça
        j++;
      } else {
        const skip = board[i].substring(j).match(/^\d+/); // Encontra a quantidade de espaços vazios consecutivos
        sb.push(skip[0].length); // Adiciona a quantidade de espaços vazios
        j += skip[0].length; // Move o índice para frente
      }
    }

    sb.push("/"); // Adiciona a barra no final da linha
  }

  sb.splice(sb.length - 1, 1); // Remove a última barra
  return sb.join(""); // Retorna a notação final em formato normal
}
