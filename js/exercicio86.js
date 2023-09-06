function solution(shoes) {
    const count = {};
  
    // Count the number of shoes of each size for left and right shoes
    for (const [type, size] of shoes) {
      if (count[size] === undefined) {
        count[size] = [0, 0];
      }
      count[size][type]++;
    }
  
    // Check if the count of each size for left and right shoes is equal
    for (const size in count) {
      const [leftCount, rightCount] = count[size];
      if (leftCount !== rightCount) {
        return false;
      }
    }
  
    return true;
  }
  