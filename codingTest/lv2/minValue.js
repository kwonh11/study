// 최솟값

function solution(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  return arr1.reduce((ac, cr, i) => ac + cr * arr2[i], 0);
}

console.log(solution([1, 4, 2], [5, 4, 4]));
