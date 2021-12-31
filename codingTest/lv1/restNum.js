function solution(n) {
  let num = 2;
  while (true) {
    if (n % num === 1 || num > n) {
      break;
    }
    num++;
  }
  return num;
}

console.log(solution(12));
