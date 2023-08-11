function solution(n) {
    // Extrai o dígito das dezenas e o dígito das unidades
    let dígitoDezenas = Math.floor(n / 10);
    let dígitoUnidades = n % 10;
  
    // Calcula a soma dos dígitos
    let soma = dígitoDezenas + dígitoUnidades;
  
    return soma;
  }
  