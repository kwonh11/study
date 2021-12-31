function solution(land) {
  var answer = 0;

  for (let i = 1; i < land.length; i++) {
    // 현재 열을 제외한 이전 행의 최댓값 + 현재 발판
    land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
    land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
    land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
    land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
  }

  // 마지막 행의 최댓값
  const back = land.length - 1;
  answer = Math.max(land[back][0], land[back][1], land[back][2], land[back][3]);

  return answer;
}
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
