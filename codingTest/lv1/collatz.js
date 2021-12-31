function solution(num) {
  let count = 0;
  function calculate(input) {
    if (input === 1) return count;
    const result = input % 2 === 0 ? input / 2 : input * 3 + 1;
    count++;
    return result === 1 ? count : count >= 500 ? -1 : calculate(result);
  }
  return calculate(num);
}

console.log(solution(16));
