function solution(S, C) {
  const costArr = [...C];
  let cost = 0;
  for (let a = 0; a < S.length - 1; a++) {
    if (S[a] === S[a + 1]) {
      const cheaperIndex = costArr[a] > costArr[a + 1] ? a + 1 : a;
      const cost1 = costArr[a] === -1 ? costArr[a - 1] : costArr[a];
      const minCost = Math.min(cost1, costArr[a + 1]);
      cost += minCost;
      costArr[cheaperIndex] = -1;
    }
  }
  return cost;
}

console.log(solution("abccdbccc", [0, 1, 2, 3, 4, 5, 4, 3, 5]));

// const char = ["a", "b", "c", "d", "e", "f", "g"];
// const getRandomStr = (count) => {
//   return Array(count)
//     .fill(0)
//     .map((_, i) => {
//       return char[Math.ceil(Math.random() * 7) - 1];
//     })
//     .join("");
// };
// const getRandomCost = (count) => {
//   return Array(count)
//     .fill(0)
//     .map((_, i) => Math.ceil(Math.random() * 7) + 5);
// };
// const dummyStr = Array(100)
//   .fill(0)
//   .map((_, i) => {
//     return getRandomStr(i + 1);
//   });
// const dummyCost = Array(100)
//   .fill(0)
//   .map((_, i) => getRandomCost(i + 1));

// dummyStr.forEach((str, i) => {
//   console.log(solution(str, dummyCost[i]));
// });
