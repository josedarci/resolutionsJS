function solution(king, amazon) {
  const result = [0, 0, 0, 0];
  const grid = Array.from({ length: 8 }, () => Array(8).fill(0));

  function markKingBlocksAmazon(grid, king, amazon) {
    const distHoriz = king.charCodeAt(0) - amazon.charCodeAt(0);
    const distVert = parseInt(king[1], 10) - parseInt(amazon[1], 10);
    const king_l = king.charCodeAt(0) - "a".charCodeAt(0);
    const king_n = parseInt(king[1], 10) - 1;
    const amazon_l = amazon.charCodeAt(0) - "a".charCodeAt(0);
    const amazon_n = parseInt(amazon[1], 10) - 1;

    if (distHoriz === distVert) {
      // share diag
      if (king_l > amazon_l) {
        for (let i = king_n + 2, j = king_l + 2; i < 8 && j < 8; i++, j++) {
          grid[i][j] = 3;
        }
      } else {
        for (let i = king_n - 2, j = king_l - 2; i >= 0 && j >= 0; i--, j--) {
          grid[i][j] = 3;
        }
      }
    } else if (distHoriz === -distVert) {
      if (king_l > amazon_l) {
        for (let i = king_n - 2, j = king_l + 2; i >= 0 && j < 8; i--, j++) {
          grid[i][j] = 3;
        }
      } else {
        for (let i = king_n + 2, j = king_l - 2; i < 8 && j >= 0; i++, j--) {
          grid[i][j] = 3;
        }
      }
    } else if (distHoriz === 0) {
      // share column
      if (king_n > amazon_n) {
        for (let i = king_n + 2; i < 8; i++) {
          grid[i][king_l] = 3;
        }
      } else {
        for (let i = king_n - 2; i >= 0; i--) {
          grid[i][king_l] = 3;
        }
      }
    } else if (distVert === 0) {
      // share row
      if (king_l > amazon_l) {
        for (let i = king_l + 2; i < 8; i++) {
          grid[king_n][i] = 3;
        }
      } else {
        for (let i = king_l - 2; i >= 0; i--) {
          grid[king_n][i] = 3;
        }
      }
    }
  }

  function canMove(k, l, grid) {
    if (
      (k > 0 && (grid[k - 1][l] === 3 || grid[k - 1][l] === 1)) ||
      (k < 7 && (grid[k + 1][l] === 3 || grid[k + 1][l] === 1)) ||
      (l > 0 && (grid[k][l - 1] === 3 || grid[k][l - 1] === 1)) ||
      (l < 7 && (grid[k][l + 1] === 3 || grid[k][l + 1] === 1)) ||
      (k > 0 &&
        l > 0 &&
        (grid[k - 1][l - 1] === 3 || grid[k - 1][l - 1] === 1)) ||
      (k < 7 &&
        l < 7 &&
        (grid[k + 1][l + 1] === 3 || grid[k + 1][l + 1] === 1)) ||
      (k > 0 &&
        l < 7 &&
        (grid[k - 1][l + 1] === 3 || grid[k - 1][l + 1] === 1)) ||
      (k < 7 && l > 0 && (grid[k + 1][l - 1] === 3 || grid[k + 1][l - 1] === 1))
    )
      return true;
    return false;
  }

  function shareRowCol(fig1, fig2) {
    return fig1[0] === fig2[0] || fig1[1] === fig2[1];
  }

  function shareDiagonal(fig1, fig2) {
    return (
      Math.abs(fig1.charCodeAt(0) - fig2.charCodeAt(0)) ===
      Math.abs(parseInt(fig1[1], 10) - parseInt(fig2[1], 10))
    );
  }

  function withinKnightsMove(amazon, fig) {
    const l = Math.abs(amazon.charCodeAt(0) - fig.charCodeAt(0));
    const h = Math.abs(parseInt(amazon[1], 10) - parseInt(fig[1], 10));
    return (l === 1 && h === 2) || (l === 2 && h === 1);
  }

  function canBeatAmazon(king, amazon) {
    if (Math.abs(king.charCodeAt(0) - amazon.charCodeAt(0)) > 1) return false;
    if (Math.abs(parseInt(king[1], 10) - parseInt(amazon[1], 10)) > 1)
      return false;
    return true;
  }
  function closePositions(fig1, fig2) {
    if (Math.abs(fig1.charCodeAt(0) - fig2.charCodeAt(0)) > 1) return false;
    if (Math.abs(parseInt(fig1[1], 10) - parseInt(fig2[1], 10)) > 1)
      return false;
    return true;
  }

  function markCanBeatAmazon(grid, king, amazon) {
    if (!closePositions(king, amazon)) {
      grid[parseInt(amazon[1], 10) - 1][
        amazon.charCodeAt(0) - "a".charCodeAt(0)
      ] = 1;
    }
  }

  for (let i = "1".charCodeAt(0); i <= "8".charCodeAt(0); i++) {
    for (let c = "a".charCodeAt(0); c <= "h".charCodeAt(0); c++) {
      const blackKing = String.fromCharCode(c) + String.fromCharCode(i);
      if (closePositions(king, blackKing) || blackKing === amazon) {
        grid[i - "1".charCodeAt(0)][c - "a".charCodeAt(0)] = 0;
      } else if (
        shareRowCol(amazon, blackKing) ||
        shareDiagonal(amazon, blackKing) ||
        withinKnightsMove(amazon, blackKing)
      ) {
        grid[i - "1".charCodeAt(0)][c - "a".charCodeAt(0)] = 2;
      } else {
        grid[i - "1".charCodeAt(0)][c - "a".charCodeAt(0)] = 3;
      }
    }
  }

  markKingBlocksAmazon(grid, king, amazon);
  markCanBeatAmazon(grid, king, amazon);

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (grid[i][j] === 2) {
        if (canMove(i, j, grid)) {
          // check
          result[1]++;
        } else {
          // checkmate
          result[0]++;
        }
      } else if (grid[i][j] === 3) {
        if (canMove(i, j, grid)) {
          // can move
          result[3]++;
        } else {
          // stalemate
          result[2]++;
        }
      }
    }
  }

  return result;
}
