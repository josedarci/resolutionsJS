// Função para alterar o k-ésimo bit de n para 0
function solution(n, k) {
  // Usa a operação bitwise AND para aplicar uma máscara que altera o k-ésimo bit para 0
  // ~(1 << (k - 1)) cria uma máscara onde todos os bits são 1, exceto o k-ésimo que é 0
  // n & ~(1 << (k - 1)) realiza a operação AND bit a bit entre n e a máscara,
  // resultando em n com o k-ésimo bit alterado para 0
  return n & ~(1 << (k - 1));
}
