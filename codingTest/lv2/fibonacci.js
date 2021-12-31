// 피보나치 수
//  (A + B) % C ≡ ( ( A % C ) + ( B % C) ) % C라는 성질을 이용

function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, (a % 1234567) + (b % 1234567)];
  }
}
function solution(n) {
  const result = fibonacci();
  return (
    Array(n + 1)
      .fill(1)
      .reduce((ac, cr) => result.next().value, 0) % 1234567
  );
}

console.log(solution(5)); // 5
