function solution(s) {
  const result = [...s].reduce((ac, cr) => {
    if (ac < 0) return -1;
    const v = cr === "(" ? 1 : -1;
    return ac + v;
  }, 0);
  return result === 0 ? true : false;
}

console.log(solution("(())()"));
