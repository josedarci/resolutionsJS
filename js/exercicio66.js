function print(a) {
  for (const x of a) {
    let line = "";
    for (const y of x) {
      line += y;
    }
    console.log(line);
  }
  console.log("");
}

function parse(dtime, off) {
  const locs = [
    [0, 1],
    [7, 0],
    [7, 2],
    [8, 1],
    [9, 0],
    [9, 2],
    [16, 1],
  ];
  const lookup = [119, 73, 93, 91, 58, 107, 111, 82, 127, 123];
  let key = 0;
  for (const loc of locs) {
    key *= 2;
    key += dtime[loc[0]][off + loc[1]] === "*" ? 1 : 0;
  }
  for (let i = 0; i < 10; i++) {
    if (lookup[i] === key) {
      return i;
    }
  }
}

function circle(result) {
  for (let y = -8; y <= 8; y++) {
    for (let x = -8; x <= 8; x++) {
      const d = Math.sqrt(x * x + y * y);
      if (Math.abs(d - 8.5) < Math.sqrt(0.5)) {
        result[y + 8][x + 8] = "*";
      }
    }
  }
}
function hand(result, angle) {
  angle *= 2 * Math.PI;
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  for (let y = -8; y <= 8; y++) {
    for (let x = -8; x <= 8; x++) {
      const h = Math.abs(s * y + c * x);
      const r = s * x - c * y;
      const d = h * h + Math.min(r * r, Math.pow(r - 8.5, 2));
      if (h < Math.sqrt(0.5) - 1e-9 && ((r > 0 && r < 8.5) || d < 0.5)) {
        result[y + 8][x + 8] = "*";
      }
    }
  }
}

function solution(dtime) {
  const result = new Array(17).fill(null).map(() => new Array(17).fill("."));
  const hour = parse(dtime, 1) * 10 + parse(dtime, 5);
  const minute = parse(dtime, 10) * 10 + parse(dtime, 14);
  const hourFrac = (hour * 60 + minute) / 720.0;
  const minuteFrac = minute / 60.0;

  circle(result);
  hand(result, hourFrac);
  hand(result, minuteFrac);

  print(result);
  return result;
}
