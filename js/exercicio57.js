function solution(field, clicks, newBalls, newBallsCoordinates) {
  let point = 0;
  let iFail = 0;
  let o = true;

  function withinBounds(y, x, height, width) {
    return y > -1 && y < height && x > -1 && x < width;
  }

  function clearRoad(origin, target, field) {
    let objetivo = false;
    field[origin[0]][origin[1]] = "*";

    if (origin[0] === target[0] && origin[1] === target[1]) {
      return true;
    }

    if (origin[0] > 0 && field[origin[0] - 1][origin[1]] === "." && !objetivo) {
      objetivo = clearRoad([origin[0] - 1, origin[1]], target, field);
    }

    if (
      origin[1] < field[origin[0]].length - 1 &&
      field[origin[0]][origin[1] + 1] === "." &&
      !objetivo
    ) {
      objetivo = clearRoad([origin[0], origin[1] + 1], target, field);
    }

    if (
      origin[0] < field.length - 1 &&
      field[origin[0] + 1][origin[1]] === "." &&
      !objetivo
    ) {
      objetivo = clearRoad([origin[0] + 1, origin[1]], target, field);
    }

    if (origin[1] > 0 && field[origin[0]][origin[1] - 1] === "." && !objetivo) {
      objetivo = clearRoad([origin[0], origin[1] - 1], target, field);
    }

    return objetivo;
  }

  function failMove(field, newBalls, newBallsCoordinates, iFail) {
    const start = iFail;
    const end = iFail + 3;

    if (end > newBalls.length) {
      return 0;
    }

    newBalls = newBalls.slice(start, end);
    newBallsCoordinates = newBallsCoordinates.slice(start, end);
    for (let x = 0; x < newBalls.length; x++) {
      field[newBallsCoordinates[x][0]][newBallsCoordinates[x][1]] = newBalls[x];
    }

    return countPoints(field);
  }

  function countPoints(field) {
    let l = 0;
    let b = 0;
    const lH = [];
    const lV = [];
    const ld1 = [];
    const ld2 = [];

    let h = null;

    for (let y = 0; y < field.length; y++) {
      h = countLine(field[y].join(""));
      if (h !== null) {
        h[2] = y;
        h[3] = h[1];
        lH.push(h);
      }
    }

    for (let x = 0; x < 9; x++) {
      const line = [];

      for (let y = 0; y < 9; y++) {
        line.push(field[y][x]);
      }

      h = countLine(line.join(""));

      if (h !== null) {
        h[2] = h[1];
        h[3] = x;
        lV.push(h);
      }
    }

    let x1 = 4;
    let y1 = 0;
    let size = 5;
    let nl = 9;

    while (nl > 0) {
      const line = [];

      for (let x = x1, y = y1, s = 0; x < 9 && y < 9; x++, y++, s++) {
        line.push(field[y][x]);
      }

      h = countLine(line.join(""));

      if (h !== null) {
        h[2] = y1;
        h[3] = x1;
        ld1.push(h);
      }

      nl--;

      if (nl >= 5) {
        x1--;
      } else if (nl < 5 && nl > 0) {
        y1++;
      }

      size += nl >= 5 ? 1 : -1;
    }

    nl = 9;
    size = 5;
    y1 = 8;
    x1 = 4;

    while (nl > 0) {
      const line = [];

      for (let x = x1, y = y1, s = 0; x < 9 && y >= 0; x++, y--, s++) {
        line.push(field[y][x]);
      }

      h = countLine(line.join(""));

      if (h !== null) {
        h[2] = y1;
        h[3] = x1;
        ld2.push(h);
      }

      nl--;

      if (nl >= 5) {
        x1--;
      } else if (nl < 5 && nl > 0) {
        y1--;
      }

      size += nl >= 5 ? 1 : -1;
    }

    for (const line of lH) {
      l++;
      b += line[0];

      for (let x = line[3]; x < line[0]; x++) {
        field[line[2]][x] = ".";
      }
    }
    for (const line of lV) {
      l++;
      b += line[0];

      for (let y = line[2]; y < line[0] + line[2]; y++) {
        field[y][line[3]] = ".";
      }
    }

    for (const line of ld1) {
      l++;
      b += line[0];

      if (line[2] === 0) {
        for (
          let x = line[3] + line[1], y = line[1], ball = 0;
          ball < line[0];
          ball++, x++, y++
        ) {
          field[y][x] = ".";
        }
      } else {
        for (
          let y = line[3] + line[1], x = line[3] + line[1], ball = 0;
          ball < line[0];
          ball++, y++, x++
        ) {
          field[y][x] = ".";
        }
      }
    }

    for (const line of ld2) {
      l++;
      b += line[0];

      for (
        let y = line[2] - line[1], x = line[3] + line[1], ball = 0;
        ball < line[0];
        ball++, y--, x++
      ) {
        field[y][x] = ".";
      }
    }

    if (l > 0) {
      return l + b - 1;
    }

    return 0;
  }

  function countLine(line) {
    const pattern = /[R]{5,}|[B]{5,}|[O]{5,}|[V]{5,}|[G]{5,}|[Y]{5,}|[C]{5,}/;
    const matches = line.match(pattern);

    if (matches) {
      return [matches[0].length, line.lastIndexOf(matches[0]), 0, 0];
    }

    return null;
  }
  for (let c = 0; c < clicks.length; c++) {
    if (o && field[clicks[c][0]][clicks[c][1]] !== ".") {
      o = false;
    } else if (!o && field[clicks[c][0]][clicks[c][1]] === ".") {
      const fieldC = field.map((row) => [...row]);

      if (clearRoad(clicks[c - 1], clicks[c], fieldC)) {
        field[clicks[c][0]][clicks[c][1]] =
          field[clicks[c - 1][0]][clicks[c - 1][1]];
        field[clicks[c - 1][0]][clicks[c - 1][1]] = ".";
        const po = countPoints(field);

        if (po > 0) {
          point += po;
        } else {
          point += failMove(field, newBalls, newBallsCoordinates, iFail);
          iFail += 3;
        }
      } else {
        point += failMove(field, newBalls, newBallsCoordinates, iFail);
        iFail += 3;
      }
      o = true;
    } else {
      if (!o) {
        o = true;
        c--;
      }
      point += failMove(field, newBalls, newBallsCoordinates, iFail);
      iFail += 3;
    }
  }

  return point;
}

const field = [
  ["V", ".", ".", ".", "O", ".", ".", ".", "O"],
  ["V", "O", ".", ".", "O", ".", ".", "O", "V"],
  ["V", ".", "O", ".", "O", ".", "O", ".", "."],
  ["V", ".", ".", "O", "O", "O", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "O"],
  ["V", ".", ".", "O", "O", "O", ".", ".", "."],
  ["V", ".", "O", ".", "O", ".", "O", ".", "."],
  ["V", "O", ".", ".", "O", ".", ".", "O", "."],
  ["V", ".", ".", ".", "O", ".", ".", ".", "O"],
];

const clicks = [
  [4, 8],
  [4, 4],
  [1, 8],
  [4, 0],
];
const newBalls = [];
const newBallsCoordinates = [];

console.log(solution(field, clicks, newBalls, newBallsCoordinates));
