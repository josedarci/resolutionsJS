function solution(inputString) {
  const charCount = {};

  // Contar a ocorrência de cada caractere em inputString
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  let oddCount = 0;

  // Verificar a contagem de cada caractere
  for (let char in charCount) {
    if (charCount[char] % 2 !== 0) {
      oddCount++;
    }

    // Se mais de um caractere tiver contagem ímpar, não é possível formar um palíndromo
    if (oddCount > 1) {
      return false;
    }
  }

  return true;
}
