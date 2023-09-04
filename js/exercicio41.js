function solution(someTime, leavingTime) {
  // Converte as strings de someTime e leavingTime em objetos Date para cálculos.
  const startTime = new Date(someTime);
  const endTime = new Date(leavingTime);

  // Calcula a diferença em milissegundos entre os dois horários.
  const timeDiff = endTime - startTime;

  // Subtrai a diferença de tempo do horário inicial para obter o horário final no relógio curioso.
  const finalTime = new Date(startTime.getTime() - timeDiff);

  // Formata o horário final como "AAAA-MM-DD HH:MM" e retorna.
  const formattedTime = finalTime.toISOString().slice(0, 16).replace("T", " ");
  return formattedTime;
}

// Testa a função com o exemplo fornecido.
const someTime = "2016-08-26 22:40";
const leavingTime = "2016-08-29 10:00";
console.log(solution(someTime, leavingTime)); // Deve imprimir "2016-08-24 11:20"
