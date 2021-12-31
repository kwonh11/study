function solution(num) {
  return Number([...String(num)].sort((a, b) => b - a).join(""));
}

console.log(solution(118372));
