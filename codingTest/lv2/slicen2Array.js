// function solution(n, left, right) {
//   let repeater = "";
//   for (let a = 1; a <= n; a++) {
//     repeater += a;
//   }
//   const str = Array(n)
//     .fill(0)
//     .map((v, i) => String(i + 1).repeat(i) + repeater.slice(i))
//     .join("");
//   return [...str].slice(left, right + 1).map((v) => Number(v));
// }
// console.log(solution(4, 2, 5));
// [
//   [1, 2, 3, 4],
//   [2, 2, 3, 4],
//   [3, 3, 3, 4],
//   [4, 4, 4, 4],
// ];
