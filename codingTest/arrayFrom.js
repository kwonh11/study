function solution(x, n) {
  return Array.from(
    Array(5)
      .fill(1)
      .map((_, i) => i + 1),
    (el) => el * x
  );
}

console.log(solution(2, 5));
