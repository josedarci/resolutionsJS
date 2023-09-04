function solution(letter) {
    // Cria uma expressão regular para encontrar pares de palavras iguais consecutivas
    var pattern = /([a-z]+)[^a-z]+\1\b/ig;
  
    // Utiliza o método match para encontrar todas as correspondências na string
    var matches = letter.match(pattern);
  
    // Verifica se há correspondências
    if (matches) {
      return matches.length;  // Retorna a quantidade de pares encontrados
    }
    else {
      return 0;  // Retorna 0 caso não haja pares encontrados
    }
  }
  