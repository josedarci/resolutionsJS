function solution(takeOffTime, minutes) {
  let temp;
  for (let i = minutes.length - 1; i >= 1; i--) {
    temp = minutes[i - 1];
    minutes[i] -= temp;
  }

  let time;
  const [hour, minute] = takeOffTime.split(":").map(Number);
  let count = 0;

  if (hour === 0 && minute === 0) {
    time = new Date(2018, 0, 1, hour, minute, 0);
  } else {
    time = new Date(2017, 11, 31, hour, minute, 0);
  }

  const newYear = new Date(2018, 0, 1, 0, 0, 0);

  for (let i = 0; i < minutes.length; i++) {
    if (time.getTime() === newYear.getTime()) {
      count++;
    } else if (time.getTime() < newYear.getTime()) {
      if (new Date(time.getTime() + minutes[i] * 60000) >= newYear) {
        count++;
      }
    }
    time = new Date(time.getTime() + minutes[i] * 60000);
    time = new Date(time.getTime() - 3600000); // Subtract one hour
  }

  return time.getTime() <= newYear.getTime() ? count + 1 : count;
}

const takeOffTime = "23:35";
const minutes = [60, 90, 140];
console.log(solution(takeOffTime, minutes)); // Deve imprimir 3
