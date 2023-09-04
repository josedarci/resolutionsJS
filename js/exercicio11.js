function solution(n) {
    const hours = Math.floor(n / 60);
    const minutes = n % 60;
    const hoursDigitSum = sumDigits(hours);
    const minutesDigitSum = sumDigits(minutes);
    return hoursDigitSum + minutesDigitSum;
  }
  
  function sumDigits(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  