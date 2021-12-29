function solution(numbers) {
  const MAX = 45;
  return 45 - numbers.reduce((ac, cr) => ac + cr, 0);
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 0])); // 14
