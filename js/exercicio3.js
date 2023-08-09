// A função recebe uma string representando uma data de aniversário no formato "MM-DD-AAAA".
function solution(bd) {
  // Divide a string em mês (m), dia (d) e ano (y), convertendo-os para números inteiros.
  const [m, d, y] = bd.split("-").map((i) => parseInt(i));
  // Verifica se é um dia de ano bissexto.
  const is_leap_day = m === 2 && d === 29;

  // Função para verificar se um ano é bissexto.
  function is_leap(y) {
    return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  }

  // Função para determinar o número de dias em um ano.
  function days(y) {
    // Retorna 366 se o ano atual ou o próximo for bissexto e o mês for antes de março ou depois de fevereiro.
    return (is_leap(y) && m < 3) || (is_leap(y + 1) && m > 2) ? 366 : 365;
  }

  // Inicializa a contagem de dias no ano atual.
  let start = days(y);
  // Próximo ano a ser verificado.
  let next_y = y + 1;
  // Enquanto o início da contagem de dias não for um múltiplo de 7 (indicando o mesmo dia da semana) ou for um dia de ano bissexto...
  while (start % 7 || is_leap_day) {
    // Adiciona o número de dias no próximo ano à contagem.
    start += days(next_y);
    // Incrementa o próximo ano.
    next_y += 1;

    // Se o início for um múltiplo de 7 (dia da semana) e for um dia de ano bissexto e o próximo ano também for bissexto, sai do loop.
    if (!(start % 7) && is_leap_day && is_leap(next_y)) {
      break;
    }
  }

  // Retorna a diferença entre o próximo ano e o ano original, que é o número de anos até que o dia da semana do aniversário seja o mesmo.
  return next_y - y;
}

// Testa a função com a data de aniversário "02-29-2016".
const birthdayDate = "02-29-2016";
console.log(solution(birthdayDate)); // Deve retornar 4
