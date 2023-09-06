function solution(shuffled) {
    let elementSum = 0;
    const n = shuffled.length;
    for (let i = 0; i < n; i++) {
      elementSum += shuffled[i];
    }
    const result = [];
  
    let k = 0;
    let find = false;
    for (let i = 0; i < n; i++) {
      if (!find) {
        if (elementSum - 2 * shuffled[i] === 0) {
          find = true;
        } else {
          result[k] = shuffled[i];
          k++;
        }
      } else {
        result[k] = shuffled[i];
        k++;
      }
    }
    result.sort((a, b) => a - b);
  
    return result;
  }
  