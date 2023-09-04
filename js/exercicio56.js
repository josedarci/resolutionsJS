class Pyramid {
  constructor() {
    // Inicialização das faces do Pyraminx com matrizes preenchidas com 0.
    this.Front = Array.from({ length: 3 }, () => Array(5).fill(0));
    this.Left = Array.from({ length: 3 }, () => Array(5).fill(0));
    this.Right = Array.from({ length: 3 }, () => Array(5).fill(0));
    this.Bottom = Array.from({ length: 3 }, () => Array(5).fill(0));
  }
  // Inicializa as faces do Pyraminx com as cores fornecidas.
  init(faceColors) {
    this.Front = this.fill(faceColors[0]);
    this.Bottom = this.fill(faceColors[1]);
    this.Left = this.fill(faceColors[2]);
    this.Right = this.fill(faceColors[3]);
  }
  // Preenche uma face com a cor especificada.
  fill(color) {
    const A = [];
    for (let i = 0; i < 3; i++) {
      A[i] = Array(i * 2 + 1).fill(color);
    }
    return A;
  }
  // Realiza uma rotação nas matrizes, aplicando inversão vertical e horizontal.
  rotate(r) {
    // Inverse Vertical
    this.swap(r[0], 0, r[2], 0);
    this.swap(r[1], 1, r[2], 1);
    this.swap(r[1], 2, r[2], 2);
    // Inverse Horizontal
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < i + 1; j++) {
        const tt = r[i][j];
        r[i][j] = r[i][2 * i - j];
        r[i][2 * i - j] = tt;
      }
    }
  }

  rotateLevel1(dir, Left, Front, Right) {
    const tt = Left[0][0];
    if (dir === -1) {
      Left[0][0] = Right[0][0];
      Right[0][0] = Front[0][0];
      Front[0][0] = tt;
    } else {
      Left[0][0] = Front[0][0];
      Front[0][0] = Right[0][0];
      Right[0][0] = tt;
    }
  }

  rotateLevel2(dir, Left, Front, Right) {
    const tt = [...Left[1]];
    if (dir === -1) {
      Left[1] = Right[1];
      Right[1] = Front[1];
      Front[1] = tt;
    } else {
      Left[1] = Front[1];
      Front[1] = Right[1];
      Right[1] = tt;
    }
  }
  play(command) {
    let dir = 1;
    switch (command) {
      case "U'":
        dir = -1;
      case "U":
        this.rotateLevel1(dir, this.Left, this.Front, this.Right);
        break;
      case "u'":
        dir = -1;
        this.rotateLevel2(dir, this.Left, this.Front, this.Right);
        this.play("U'");
        break;
      case "u":
        this.rotateLevel2(dir, this.Left, this.Front, this.Right);
        this.play("U");
        break;
      case "L'":
        dir = -1;
      case "L":
        this.CLeft();
        this.rotateLevel1(dir, this.Bottom, this.Front, this.Left);
        this._CLeft();
        break;
      case "l'":
        dir = -1;
        this.CLeft();
        this.rotateLevel2(dir, this.Bottom, this.Front, this.Left);
        this._CLeft();
        this.play("L'");
        break;
      case "l":
        this.CLeft();
        this.rotateLevel2(dir, this.Bottom, this.Front, this.Left);
        this._CLeft();
        this.play("L");
        break;
      case "R'":
        dir = -1;
      case "R":
        this.CRight();
        this.rotateLevel1(dir, this.Right, this.Front, this.Bottom);
        this._CRight();
        break;
      case "r'":
        dir = -1;
        this.CRight();
        this.rotateLevel2(dir, this.Right, this.Front, this.Bottom);
        this._CRight();
        this.play("R'");
        break;
      case "r":
        this.CRight();
        this.rotateLevel2(dir, this.Right, this.Front, this.Bottom);
        this._CRight();
        this.play("R");
        break;
      case "B'":
        dir = -1;
      case "B":
        this.CBottom();
        this.rotateLevel1(dir, this.Right, this.Bottom, this.Left);
        this._CBottom();
        break;
      case "b'":
        dir = -1;
        this.CBottom();
        this.rotateLevel2(dir, this.Right, this.Bottom, this.Left);
        this._CBottom();
        this.play("B'");
        break;
      case "b":
        this.CBottom();
        this.rotateLevel2(dir, this.Right, this.Bottom, this.Left);
        this._CBottom();
        this.play("B");
        break;
    }
  }

  swap(A, a, B, b) {
    const tt = A[a];
    A[a] = B[b];
    B[b] = tt;
  }

  CLeft() {
    this.rotate(this.Bottom);
    this.rotate(this.Bottom);
    this.rotate(this.Front);
    this.rotate(this.Left);
    this.rotate(this.Left);
  }

  _CLeft() {
    this.rotate(this.Bottom);
    this.rotate(this.Front);
    this.rotate(this.Front);
    this.rotate(this.Left);
  }
  CRight() {
    this.rotate(this.Right);
    this.rotate(this.Front);
    this.rotate(this.Front);
    this.rotate(this.Bottom);
  }

  _CRight() {
    this.rotate(this.Right);
    this.rotate(this.Right);
    this.rotate(this.Front);
    this.rotate(this.Bottom);
    this.rotate(this.Bottom);
  }

  CBottom() {
    this.rotate(this.Right);
    this.rotate(this.Right);
    this.rotate(this.Left);
  }

  _CBottom() {
    this.rotate(this.Right);
    this.rotate(this.Left);
    this.rotate(this.Left);
  }
}

function solution(faceColors, moves) {
  // Cria uma instância da classe Pyramid.
  const p = new Pyramid();
  p.init(faceColors);
  // Aplica os movimentos fornecidos ao Pyraminx.
  for (let i = moves.length - 1; i >= 0; i--) {
    p.play(moves[i]);
  }
  // Realiza rotações finais para ajustar a posição final.
  p.rotate(p.Left);
  p.rotate(p.Left);
  p.rotate(p.Right);
  // Cria um array para o resultado final.
  const result = Array.from({ length: 4 }, () => Array(9).fill(0));
  fillResult(p.Front, result[0]);
  fillResult(p.Bottom, result[1]);
  fillResult(p.Left, result[2]);
  fillResult(p.Right, result[3]);
  return result;
}
// Preenche uma linha do resultado com as cores de uma face após os movimentos.
function fillResult(A, row) {
  let k = 0;
  for (const A1 of A) {
    for (let j = 0; j < A1.length; j++, k++) {
      row[k] = A1[j];
    }
  }
}
