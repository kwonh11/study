const rankTable = [6, 6, 5, 4, 3, 2, 1];
// function solution(lottos, win_nums) {
//   win_nums.sort((a, b) => a - b);
//   const notZeros = lottos.filter((num) => num !== 0);
//   const zerosCount = lottos.length - notZeros.length;
//   const correctNumbersCount = notZeros
//     .map((num) => win_nums.includes(num))
//     .reduce((ac, cr) => ac + (cr ? 1 : 0), 0);
//   const max = rankTable[correctNumbersCount + zerosCount];
//   const min = rankTable[correctNumbersCount];
//   var answer = [max, min];
//   return answer;
// }
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
