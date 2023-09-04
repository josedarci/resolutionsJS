function solution(a, b) {
  let count = 0; // Inicializa o contador de 1s como 0

  // Loop que percorre todos os números de 'a' a 'b'
  for (let num = a; num <= b; num++) {
    count += countOnes(num); // Adiciona a contagem de 1s do número ao contador
  }

  return count; // Retorna o total de 1s na representação binária dos números no intervalo
}

// Função auxiliar para contar os 1s na representação binária de um número
function countOnes(num) {
  let count = 0; // Inicializa o contador de 1s como 0

  // Loop que executa enquanto o número for maior que 0
  while (num > 0) {
    if (num % 2 === 1) {
      // Se o último dígito for 1 (resto da divisão por 2)
      count++; // Incrementa o contador
    }
    num = Math.floor(num / 2); // Divide o número por 2 e arredonda para baixo
  }

  return count; // Retorna o total de 1s na representação binária do número
}
