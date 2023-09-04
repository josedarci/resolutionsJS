const field = Array.from({ length: 20 }, () =>
  Array.from({ length: 10 }, () => ".")
);

function solution(pieces) {
  let score = 0;

  for (const piece of pieces) {
    const nrBlocks = getNrBlocks(piece);
    const max = Math.max(...nrBlocks.flat());
    const rot = nrBlocks.findIndex((arr) => arr.includes(max));
    const col = nrBlocks[rot].indexOf(max);
    const rotPiece = rotateN(piece, rot);
    placeBlock(rotPiece, drop(rotPiece, col), col, "#");
    score += removeFullLines();
    //console.log(toString(field));
  }

  return score;
}

function removeFullLines() {
  let linesRemoved = 0;

  for (let row = 0; row < 20; row++) {
    if (field[row].every((cell) => cell === "#")) {
      for (let r = row; r > 0; r--) {
        field[r] = field[r - 1];
      }
      field[0] = Array.from({ length: 10 }, () => ".");
      linesRemoved++;
    }
  }

  return linesRemoved;
}

function getNrBlocks(piece) {
  const nrBlocks = Array.from({ length: 4 }, () =>
    Array.from({ length: 10 }, () => 0)
  );
  let block = piece.map((row) => [...row]);

  for (let col = 0; col < 10; col++) {
    for (let rot = 0; rot < 4; rot++) {
      block = rotateN(piece, rot);
      const row = drop(block, col);

      if (room(block, row, col)) {
        nrBlocks[rot][col] = placeBlock(block, row, col, "#");
        placeBlock(block, row, col, ".");
      }
    }
  }

  return nrBlocks;
}

function rotateN(block, n) {
  let output = [...block];

  for (let i = 0; i < n; i++) {
    const rows = output.length;
    const cols = output[0].length;
    output = Array.from({ length: cols }, (_, row) =>
      Array.from({ length: rows }, (_, col) => output[rows - col - 1][row])
    );
  }

  return output;
}

function drop(block, col) {
  let row = -1;

  while (room(block, row + 1, col)) {
    row++;
  }

  return row;
}

function placeBlock(block, row, col, p) {
  let rs = block.length;
  let cs = block[0].length;

  for (let r = 0; r < rs; r++) {
    for (let c = 0; c < cs; c++) {
      if (block[r][c] === "#") {
        field[row + r][col + c] = p;
      }
    }
  }

  let nrBlocks = 0;

  for (let r = 0; r < rs; r++) {
    for (let c = 0; c < 10; c++) {
      if (field[row + r][c] === "#") {
        nrBlocks++;
      }
    }
  }

  return nrBlocks;
}
function room(block, row, col) {
  const rs = block.length;
  const cs = block[0].length;

  if (row < 0 || row + rs - 1 >= 20 || col < 0 || col + cs - 1 >= 10) {
    return false;
  }

  for (let r = 0; r < rs; r++) {
    for (let c = 0; c < cs; c++) {
      if (block[r][c] === "#" && field[row + r][col + c] === "#") {
        return false;
      }
    }
  }

  return true;
}

function toString(field) {
  return field.map((row) => row.join("")).join("\n") + "\n";
}
