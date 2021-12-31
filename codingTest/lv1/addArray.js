function solution(arr1, arr2) {
  return arr1.map((arr, i) => arr.map((num, j) => num + arr2[i][j]));
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [4, 6],
      [7, 9],
    ]
  )
);
