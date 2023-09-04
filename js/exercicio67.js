function solution(bishop, pawn) {
  const bishopCol = bishop.charCodeAt(0) - "a".charCodeAt(0);
  const bishopRow = parseInt(bishop[1]) - 1;
  const pawnCol = pawn.charCodeAt(0) - "a".charCodeAt(0);
  const pawnRow = parseInt(pawn[1]) - 1;

  const colDiff = Math.abs(bishopCol - pawnCol);
  const rowDiff = Math.abs(bishopRow - pawnRow);

  return colDiff === rowDiff;
}
