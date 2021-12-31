// 1 + 2 + 3 + 4 + 5 = 15
// 4 + 5 + 6 = 15
// 7 + 8 = 15
// 15 = 15
// "주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와
// 주어진 수의 홀수인 약수 갯수는 같다."

function solution(n) {
  const count = Array(n)
    .fill(0)
    .map((_, i) => (n % (i + 1) === 0 ? i + 1 : 0))
    .filter((v) => v && v % 2 === 1).length;
  return count;
}

console.log(solution(15)); // 4
