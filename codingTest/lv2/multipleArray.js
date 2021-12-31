// 행렬의 곱

function solution(arr1, arr2) {
  return arr1.map((row) =>
    arr2[0].map((_, i) => row.reduce((ac, cr, j) => ac + cr * arr2[j][i], 0))
  );
}

// 1. 2*5 + 3*2 + 2*3 = 22
// 2. 2*4 + 3*4 + 2*1 = 22

console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
);
