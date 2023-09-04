// Define as constantes para as direções
const RIGHT = [1, 0];
const LEFT = [-1, 0];
const DOWN = [0, 1];
const UP = [0, -1];
// Inicializa as variáveis de direção e posição
let direction = [1, 0];
let position = [0, 0];

// Variável para armazenar as dimensões do programa
let dimensions;

// Pilha para armazenar valores
const stack = [];

// Função principal que executa o programa Befunge-93
function solution(p) {
  // Converte o programa em um array de arrays de caracteres
  const program = p.map((row) => row.split(""));

  // Obtém as dimensões do programa
  dimensions = [program[0].length, program.length];

  // Variável para armazenar a saída
  let print = "";

  // Contador de comandos executados
  let command = 0;

  // Variável para controlar o modo de leitura de texto
  let readText = false;

  // Loop principal para executar os comandos do programa
  while (command < 1e5 && print.length < 100) {
    // Verifica se o caractere atual é "
    if (program[position[1]][position[0]] === '"') {
      // Alterna o modo de leitura de texto
      readText = !readText;
    } else if (!readText) {
      // Executa os comandos do programa, exceto quando no modo de leitura de texto
      switch (program[position[1]][position[0]]) {
        case " ":
          // Espaço em branco, não faz nada
          break;
        case "v":
          direction = DOWN;
          break;
        case "<":
          direction = LEFT;
          break;
        case ">":
          direction = RIGHT;
          break;
        case "^":
          direction = UP;
          break;
        case "@":
          // Comando de término do programa, retorna a saída
          console.log(command);
          return print;
        case ".":
          // Comando de saída numérica, adiciona o valor convertido à saída
          print += remove() + " ";
          break;
        case "$":
          // Remove valor da pilha
          remove();
          break;
        case ",":
          // Comando de saída de caractere, adiciona o caractere à saída
          print += String.fromCharCode(remove());
          break;
        // ... outros comandos operadores e direcionais ...
      }
    } else {
      // Modo de leitura de texto, adiciona o valor ASCII do caractere à pilha
      add(program[position[1]][position[0]].charCodeAt(0));
    }

    // Move a posição de acordo com a direção atual
    move();

    // Incrementa o contador de comandos
    command++;
  }

  // Retorna a saída gerada pelo programa
  return print;
}

// Função para adicionar um valor à pilha
function add(value) {
  stack.unshift(value); // Insere no início da pilha
}

// Função para remover um valor da pilha
function remove(pos = 0) {
  if (stack.length <= pos) {
    return 0;
  }
  return stack.splice(pos, 1)[0]; // Remove e retorna o valor
}

// Função para obter o valor no topo da pilha
function get() {
  if (stack.length === 0) {
    return 0;
  }
  return stack[0];
}

// Função para mover a posição de acordo com a direção
function move() {
  // Calcula as novas coordenadas da posição
  position[0] = (dimensions[0] + (position[0] + direction[0])) % dimensions[0];
  position[1] = (dimensions[1] + (position[1] + direction[1])) % dimensions[1];
}
