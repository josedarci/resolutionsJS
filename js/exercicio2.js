 function solution(part, total) {
  // Dividir as strings de tempo em horas, minutos e segundos
  const [parteHoras, parteMinutos, parteSegundos] = part.split(":").map(Number);
  const [totalHoras, totalMinutos, totalSegundos] = total
    .split(":")
    .map(Number);

  // Calcular o tempo total em segundos para ambas as partes e o total
  const parteTotalSegundos =
    parteHoras * 3600 + parteMinutos * 60 + parteSegundos;
  const totalTotalSegundos =
    totalHoras * 3600 + totalMinutos * 60 + totalSegundos;

  // Calcular a fração do vídeo assistido
  const mdc = calcularMDC(parteTotalSegundos, totalTotalSegundos);
  const numerador = parteTotalSegundos / mdc;
  const denominador = totalTotalSegundos / mdc;

  return [numerador, denominador];
}

// Função para calcular o máximo divisor comum (MDC)
function calcularMDC(a, b) {
  if (b === 0) {
    return a;
  }
  return calcularMDC(b, a % b);
}
