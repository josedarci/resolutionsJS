function solution(year, daysOfTheWeek, holidays) {
  const holidaysDates = holidays
    .filter(
      (t) => parseInt(t.split("-")[0]) <= 5 || parseInt(t.split("-")[0]) >= 9
    )
    .map((t) => {
      const [mm, dd] = t.split("-").map(Number);
      return parseInt(t.split("-")[0]) < 6
        ? new Date(year + 1, mm - 1, dd)
        : new Date(year, mm - 1, dd);
    });

  const holiDaysOfWeek = holidaysDates.map((x) => x.getDay());
  for (let i = 0; i < holiDaysOfWeek.length; i++) {
    if (holiDaysOfWeek[i] === 0) holiDaysOfWeek[i] = 7;
  }

  let count = 0;
  for (let i = 0; i < holidaysDates.length; i++) {
    if (daysOfTheWeek.includes(holiDaysOfWeek[i])) count++;
  }

  return count;
}
