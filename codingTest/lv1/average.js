function solution(arr) {
  const sum = arr.reduce((ac, cr) => ac + cr, 0);
  return sum / arr.length;
}

console.log(solution([1, 2, 3, 4]));
