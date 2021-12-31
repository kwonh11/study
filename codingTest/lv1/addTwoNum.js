function solution(numbers) {
  const len = numbers.length;
  const sums = numbers.reduce((ac, cr, i) => {
    const added = new Array(len - i - 1)
      .fill(1)
      .map((_, i) => cr + numbers[len - i - 1]);
    return [...ac, ...added];
  }, []);
  return [...new Set(sums)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
