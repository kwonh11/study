const isPrime = (num) => {
  const sqrt = Math.sqrt(num);
  return Array(Math.floor(sqrt))
    .fill(0)
    .every((v, i) => {
      if (i === 0 || i + 1 === num) return true;
      const divisor = i + 1;
      return num % divisor !== 0 && divisor >= 2 && divisor < num;
    });
};
function solution(nums) {
  nums.map();
}

console.log(solution([1, 2, 3, 4])); // 1
