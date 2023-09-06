function solution(canvas, rectangle) {
  const x1 = rectangle[0],
    y1 = rectangle[1];
  const x2 = rectangle[2],
    y2 = rectangle[3];

  canvas[y1][x1] = "*";
  canvas[y2][x2] = "*";
  canvas[y1][x2] = "*";
  canvas[y2][x1] = "*";

  for (let i = x1 + 1; i < x2; i++) {
    canvas[y1][i] = "-";
    canvas[y2][i] = "-";
  }

  for (let j = y1 + 1; j < y2; j++) {
    canvas[j][x1] = "|";
    canvas[j][x2] = "|";
  }

  return canvas;
}
