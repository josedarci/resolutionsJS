function solution(a) {
  let reversed = 0; // Inicializa o número invertido como 0
  let bits = Math.floor(Math.log2(a)) + 1; // Calcula o número de bits necessários para representar 'a'

  // Loop que percorre cada bit da representação de 'a'
  for (let i = 0; i < bits; i++) {
    if (a & (1 << i)) {
      // Se o bit atual de 'a' estiver definido (1), define o bit correspondente no número invertido
      // O operador & (AND bitwise) é usado para verificar se o bit está definido em 'a'
      // O operador | (OR bitwise) é usado para definir o bit correspondente em 'reversed'
      reversed |= 1 << (bits - 1 - i);
    }
  }

  return reversed; // Retorna o número inteiro invertido
}
