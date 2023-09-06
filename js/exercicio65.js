function solution(n) {
  const line = new Line();
  for (let i = 1; i < n; ++i) line.Extend();

  const renderer = new Renderer(Math.pow(2, n), Math.pow(2, n + 1) - 1);
  return renderer.DrawLine(line);
}

class Line {
  constructor() {
    this._clockwise = false;
    this.Steps = [Line.Step.Right, Line.Step.Right];
  }

  Extend() {
    const orig = this.Steps.slice();
    const mirror = this.Steps.map(this.Mirror);

    if (this._clockwise) {
      this.Steps.push(Line.Step.Ahead, Line.Step.Right);
      this.Steps.push(...mirror);
      this.Steps.push(Line.Step.Ahead, Line.Step.Ahead);
      this.Steps.push(...mirror);
      this.Steps.push(Line.Step.Right, Line.Step.Ahead);
      this.Steps.push(...orig);
    } else {
      this.Steps.push(Line.Step.Left, Line.Step.Ahead);
      this.Steps.push(...mirror);
      this.Steps.push(Line.Step.Right, Line.Step.Right);
      this.Steps.push(...mirror);
      this.Steps.push(Line.Step.Ahead, Line.Step.Left);
      this.Steps.push(...orig);
    }

    this._clockwise = !this._clockwise;
  }

  Mirror(step) {
    switch (step) {
      case Line.Step.Left:
        return Line.Step.Right;
      case Line.Step.Right:
        return Line.Step.Left;
      default:
        return step;
    }
  }
}

Line.Step = {
  Left: "Left",
  Right: "Right",
  Ahead: "Ahead",
};
class Renderer {
  constructor(rows, columns) {
    this._table = Array.from({ length: rows }, () => Array(columns).fill(" "));
    this._direction = Renderer.Direction.Right;
    this._row = 0;
    this._col = 1;
  }

  DrawLine(line) {
    this.DrawConnector();

    for (const step of line.Steps) {
      this.Move(step);
      this.DrawConnector();
    }

    return this._table;
  }

  Move(step) {
    switch (step) {
      case Line.Step.Left:
        this.GoLeft();
        break;
      case Line.Step.Right:
        this.GoRight();
        break;
      case Line.Step.Ahead:
        this.GoAhead();
        break;
    }
  }

  GoAhead(extend = true) {
    switch (this._direction) {
      case Renderer.Direction.Left:
        this._col--;
        break;
      case Renderer.Direction.Right:
        this._col++;
        break;
      case Renderer.Direction.Up:
        this._row--;
        break;
      case Renderer.Direction.Down:
        this._row++;
        break;
    }

    if (
      extend &&
      (this._direction === Renderer.Direction.Left ||
        this._direction === Renderer.Direction.Right)
    ) {
      this.DrawConnector();
      this.GoAhead(false);
    }
  }
  GoRight() {
    switch (this._direction) {
      case Renderer.Direction.Left:
        this._col--;
        this._direction = Renderer.Direction.Up;
        break;
      case Renderer.Direction.Right:
        this._col++;
        this._row++;
        this._direction = Renderer.Direction.Down;
        break;
      case Renderer.Direction.Up:
        this._col++;
        this._row--;
        this._direction = Renderer.Direction.Right;
        break;
      case Renderer.Direction.Down:
        this._col--;
        this._direction = Renderer.Direction.Left;
        break;
    }
  }

  GoLeft() {
    switch (this._direction) {
      case Renderer.Direction.Left:
        this._col--;
        this._row++;
        this._direction = Renderer.Direction.Down;
        break;
      case Renderer.Direction.Right:
        this._col++;
        this._direction = Renderer.Direction.Up;
        break;
      case Renderer.Direction.Up:
        this._col--;
        this._row--;
        this._direction = Renderer.Direction.Left;
        break;
      case Renderer.Direction.Down:
        this._col++;
        this._direction = Renderer.Direction.Right;
        break;
    }
  }

  DrawConnector() {
    this._table[this._row][this._col] = this.GetConnector(this._direction);
  }
  GetConnector(direction) {
    switch (direction) {
      case Renderer.Direction.Left:
      case Renderer.Direction.Right:
        return "_";
      default:
        return "|";
    }
  }
}

Renderer.Direction = {
  Left: "Left",
  Right: "Right",
  Up: "Up",
  Down: "Down",
};
