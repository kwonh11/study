function getDivisorsCount(n) {
  return new Array(n)
    .fill(1)
    .map((_, i) => (n % (i + 1) === 0 ? i + 1 : null))
    .filter((v) => v).length;
}
function solution(left, right) {
  const len = right - left + 1;
  const array = new Array(len).fill(left).map((_, i) => left + i);
  const result = array.reduce((ac, cr) => {
    const count = getDivisorsCount(cr);
    return count % 2 === 0 ? ac + cr : ac - cr;
  }, 0);
  return result;
}

console.log(solution(13, 17)); // 43
