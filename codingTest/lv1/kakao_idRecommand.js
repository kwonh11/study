function solution(price, money, count) {
  const total = new Array(count)
    .fill(1)
    .reduce((ac, cr, i) => ac + price * (i + 1), 0);
  return money >= total ? 0 : total - money;
}

console.log(solution(3, 20, 4));
