// Definindo as direções possíveis que a cobra pode seguir
const directions = ["^", ">", "v", "<"];
// Função principal que recebe a matriz do tabuleiro e os comandos
function solution(gameBoard, commands) {
  // Obtém as coordenadas iniciais da cobra
  const snake = getSnake(gameBoard);
  // Itera sobre cada comando
  for (const command of commands) {
    // Move a cobra de acordo com o comando e verifica se a cobra morreu
    const isDead = moveSnake(snake, command, gameBoard);
    // Se a cobra morreu, marca as células correspondentes no tabuleiro e interrompe o loop
    if (isDead) {
      confirmDeath(snake, gameBoard);
      break;
    }
  }
  return gameBoard; // Retorna o tabuleiro atualizado
}

function moveSnake(snake, command, gameBoard) {
  const head = snake[0];

  if (command === "F") {
    // Mover para cima
    if (gameBoard[head[0]][head[1]] === "^") {
      // Verifica se há obstáculos ou bordas antes de mover
      if (head[0] - 1 < 0 || gameBoard[head[0] - 1][head[1]] === "*")
        return true;
      gameBoard[head[0] - 1][head[1]] = "^";
      snake.unshift([head[0] - 1, head[1]]);
    }

    // Mover para baixo, direita ou esquerda (mesma lógica)
    if (gameBoard[head[0]][head[1]] === "v") {
      if (
        head[0] + 1 >= gameBoard.length ||
        gameBoard[head[0] + 1][head[1]] === "*"
      )
        return true;
      gameBoard[head[0] + 1][head[1]] = "v";
      snake.unshift([head[0] + 1, head[1]]);
    }

    // go right
    if (gameBoard[head[0]][head[1]] === ">") {
      if (
        head[1] + 1 >= gameBoard[0].length ||
        gameBoard[head[0]][head[1] + 1] === "*"
      )
        return true;
      gameBoard[head[0]][head[1] + 1] = ">";
      snake.unshift([head[0], head[1] + 1]);
    }

    // go left
    if (gameBoard[head[0]][head[1]] === "<") {
      if (head[1] - 1 < 0 || gameBoard[head[0]][head[1] - 1] === "*")
        return true;
      gameBoard[head[0]][head[1] - 1] = "<";
      snake.unshift([head[0], head[1] - 1]);
    }

    gameBoard[snake[1][0]][snake[1][1]] = "*";
    gameBoard[snake[snake.length - 1][0]][snake[snake.length - 1][1]] = ".";
    snake.pop();
  } else {
    // Gira a cabeça da cobra de acordo com o comando
    gameBoard[head[0]][head[1]] = rotateHead(
      command,
      gameBoard[head[0]][head[1]]
    );
  }
  return false; // A cobra não morreu nesta iteração
}
// Função para girar a cabeça da cobra
function rotateHead(leftOrRight, head) {
  switch (leftOrRight) {
    case "L": // Encontra o índice da direção atual e gira para a esquerda
      head =
        directions[
          (directions.indexOf(head) - 1 + directions.length) % directions.length
        ];
      break;
    case "R": // Encontra o índice da direção atual e gira para a direita
      head = directions[(directions.indexOf(head) + 1) % directions.length];
      break;
  }
  return head; // Retorna a nova direção da cabeça
}
// Função para marcar as células da cobra como 'X' após a morte
function confirmDeath(snake, gameBoard) {
  for (const part of snake) {
    gameBoard[part[0]][part[1]] = "X";
  }
}
// Função para obter as coordenadas da cobra no tabuleiro
function getSnake(gameBoard) {
  const snake = [];
  let tail = null;
  // Encontra a célula da cauda ou a cabeça da cobra no tabuleiro
  // e constrói a cobra percorrendo as células adjacentes
  // A ordem de construção garante que as células da cobra sejam adicionadas corretamente
  // independentemente da sua orientação inicial
  // O resultado é uma matriz de coordenadas da cobra, da cabeça à cauda
  // Exemplo: [[2, 1], [2, 2], [2, 3], [2, 4]]

  // Resto do código para o caso de encontrar a cauda ou a cabeça da cobra no tabuleiro

  for (let i = 0; i < gameBoard.length; i++) {
    for (let j = 0; j < gameBoard[i].length; j++) {
      if (
        gameBoard[i][j] !== "*" ||
        getAdjacents([i, j], gameBoard, true).length !== 1
      )
        continue;
      tail = [i, j];
      break;
    }
  }

  if (tail !== null) {
    snake.push(tail);
    let beforeLast = null;

    while (true) {
      const adjacents = getAdjacents(snake[snake.length - 1], gameBoard, false);

      if (
        adjacents.every((x) => JSON.stringify(x) === JSON.stringify(beforeLast))
      )
        break;

      if (beforeLast === null) {
        snake.push(adjacents[0]);
      } else {
        snake.push(
          adjacents.find(
            (x) => JSON.stringify(x) !== JSON.stringify(beforeLast)
          )
        );
      }

      beforeLast = snake[snake.length - 2];
    }

    const head = getAdjacents(snake[snake.length - 1], gameBoard, true).find(
      (x) => directions.includes(gameBoard[x[0]][x[1]])
    );
    snake.push(head);
  } else {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        if (directions.every((x) => x !== gameBoard[i][j])) continue;
        snake.push([i, j]);
        break;
      }
    }
  }
  snake.reverse();
  return snake; // Retorna a matriz de coordenadas da cobra
}
// Função para obter as coordenadas adjacentes a uma célula
function getAdjacents(coordinates, gameBoard, compriseHead = false) {
  const coords = [];
  const row = coordinates[0];
  const col = coordinates[1];

  // Adiciona as coordenadas adjacentes, se forem válidas e estiverem dentro do tabuleiro
  // Para cada direção possível (cima, baixo, direita e esquerda)
  if (
    row + 1 <= gameBoard.length - 1 &&
    (gameBoard[row + 1][col] === "*" ||
      (compriseHead && directions.some((x) => x === gameBoard[row + 1][col])))
  ) {
    coords.push([row + 1, col]);
  }

  // up
  if (
    row - 1 >= 0 &&
    (gameBoard[row - 1][col] === "*" ||
      (compriseHead && directions.some((x) => x === gameBoard[row - 1][col])))
  ) {
    coords.push([row - 1, col]);
  }

  // right
  if (
    col + 1 <= gameBoard[0].length - 1 &&
    (gameBoard[row][col + 1] === "*" ||
      (compriseHead && directions.some((x) => x === gameBoard[row][col + 1])))
  ) {
    coords.push([row, col + 1]);
  }

  // left
  if (
    col - 1 >= 0 &&
    (gameBoard[row][col - 1] === "*" ||
      (compriseHead && directions.some((x) => x === gameBoard[row][col - 1])))
  ) {
    coords.push([row, col - 1]);
  }

  return coords; // Retorna a matriz de coordenadas adjacentes
}

// Test case
const gameBoard = [
  [".", ".", "*", ">", "."],
  [".", "*", "*", ".", "."],
  [".", ".", ".", ".", "."],
];

const commands = "FRFFRFFRFLFF";

const result = solution(gameBoard, commands);
for (const row of result) {
  console.log(row.join(" "));
}
