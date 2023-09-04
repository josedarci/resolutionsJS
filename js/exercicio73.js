function solution(param1, param2) {
    let result = 0;
    let multiplier = 1;
  
    while (param1 > 0 || param2 > 0) {
      const digit1 = param1 % 10;
      const digit2 = param2 % 10;
  
      result += (digit1 + digit2) % 10 * multiplier;
  
      param1 = Math.floor(param1 / 10);
      param2 = Math.floor(param2 / 10);
      multiplier *= 10;
    }
  
    return result;
  }
  