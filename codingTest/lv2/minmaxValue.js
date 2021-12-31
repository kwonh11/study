function solution(s) {
  const numbers = s.split(" ").map((v) => Number(v));
  return `${Math.min(...numbers)} ${Math.max(...numbers)}`;
}

console.log(solution("-1 -2 -3 -4"));
