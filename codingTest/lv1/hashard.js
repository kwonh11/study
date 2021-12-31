function solution(x) {
  return (
    x %
      String(x)
        .split("")
        .reduce((ac, cr) => Number(cr) + ac, 0) ===
    0
  );
}

console.log(solution(10));
