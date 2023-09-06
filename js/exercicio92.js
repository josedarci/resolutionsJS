function solution(matrix, width, center, t) {
    const [r, c] = center;
    const offset = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  
    for (let d = 1; d <= Math.floor(width / 2); d++) {
      const v = offset.map(([i, j]) => matrix[r + d * i][c + d * j]);
      const rotated = [...v.slice(-(t % 8)), ...v.slice(0, -(t % 8))];
      
      for (let o = 0; o < offset.length; o++) {
        const [i, j] = offset[o];
        matrix[r + d * i][c + d * j] = rotated[o];
      }
    }
    
    return matrix;
  }
  