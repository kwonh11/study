function solution(absolutes, signs) {
  return absolutes
    .map((v, i) => (signs[i] ? "+" : "-") + v)
    .reduce((ac, cr) => ac + Number(cr), 0);
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
