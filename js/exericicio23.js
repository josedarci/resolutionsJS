function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function solution(x, weekDay, month, yearNumber) {
  // Definir arrays de meses, comprimentos dos meses e dias da semana.
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const monthLengths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // Encontrar o índice do mês e o dia da semana fornecidos.
  const monthIndex = months.indexOf(month);
  const weekDayIndex = daysOfWeek.indexOf(weekDay);

  // Encontrar o número de dias no mês.
  const daysInMonth =
    isLeapYear(yearNumber) && monthIndex === 1 ? 29 : monthLengths[monthIndex];
  let count = 0;
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(yearNumber, monthIndex, day);
    if (date.getDay() === weekDayIndex) {
      count++;
      if (count === x) {
        return day;
      }
    }
  }

  // Se não houver resposta, retorna -1.
  return -1;
}

// Exemplos de teste
console.log(solution(3, "Wednesday", "November", 2016)); // Saída: 16
console.log(solution(5, "Thursday", "November", 2016)); // Saída: -1
