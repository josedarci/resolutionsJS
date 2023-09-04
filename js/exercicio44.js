function solution(a) {
  let M = 0; // Inicializa o número M como 0

  // Itera sobre o array de entrada a
  for (let i = 0; i < a.length; i++) {
    // Realiza um OR bit a bit entre o número M e o valor de a[i] deslocado para a esquerda
    // A expressão (a[i] << (8 * i)) desloca os bits de a[i] para a esquerda por 8 * i posições,
    // o que coloca os bits de a[i] nos 8 bits menos significativos do número resultante.
    // O operador |= atribui o resultado do OR ao número M, acumulando os valores compactados.
    M |= a[i] << (8 * i);
  }

  return M; // Retorna o número inteiro compactado M
}
