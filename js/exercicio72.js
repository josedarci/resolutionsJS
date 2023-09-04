function solution(commands) {
  let t = 0;
  let s = true;

  for (let i = 0; i < commands.length; i++) {
    let c = commands[i];

    if (c === "L" || c === "R") {
      s = !s;
    }

    if (s) {
      t++;
    }
  }

  return t;
}
