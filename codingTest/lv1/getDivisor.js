function solution(n) {
  const divisors = new Array(n)
    .fill(1)
    .map((_, i) => (n % (i + 1) === 0 ? i + 1 : null))
    .filter((v) => v)
    .reduce((ac, cr) => ac + cr, 0);
  return divisors;
}

console.log(solution(12));
