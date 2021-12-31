function solution(board) {
  const height = board.length;
  let answer = 0;
  let copiedBoard = [...board];
  if (board.length === 1 && board[0].length === 1) return 1;
  if (board.every((row) => row.every((v) => v === 0))) return 0;
  board.forEach((row, i) => {
    row.forEach((col, j) => {
      if (j > 0 && i > 0) {
        const current = copiedBoard[i][j];
        const left = copiedBoard[i - 1][j];
        const up = copiedBoard[i][j - 1];
        const leftup = copiedBoard[i - 1][j - 1];
        if (current > 0) {
          const minimum = Math.min(left, up, leftup);
          copiedBoard[i][j] = minimum + 1;
          if (answer < copiedBoard[i][j]) {
            answer = copiedBoard[i][j];
          }
        }
      }
    });
  });
  return answer * answer;
}

console.log(
  solution([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 0, 1, 0],
  ])
);

[
  [0, 1, 1, 1],
  [1, 1, 2, 2],
  [1, 2, 2, 2],
  [0, 0, 1, 0],
];
