// 최대공약수 최소공배수

// // 최소공배수
// const getLcm = (a, b) => {
//   return (a * b) / getGcd(a, b);
// };
// // 최대공약수 (a < b)
// const getGcd = (a, b) => {
//   const remains = b % a;
//   console.log("remains: ", remains);
//   return remains > 0 ? getGcd(remains, a) : a;
// };
// function solution(arr) {
//   const gcd = arr.reduce((ac, cr, i, origin) => {
//     const nextNum = origin[i + 1];
//     if (!nextNum) return ac;
//     const gcd = nextNum > cr ? getGcd(cr, nextNum) : getGcd(nextNum, cr);
//     return gcd;
//   }, arr[0]);
//   const multipleTotal = arr.reduce((ac, cr) => {
//     return ac * cr;
//   }, 1);
//   return multipleTotal / gcd;
// }

const getGcd = (a, b) => {
  const remains = b % a;
  return remains > 0 ? getGcd(remains, a) : a;
};
function solution(arr) {
  return arr.reduce((a, b) => (a * b) / getGcd(a, b));
}
console.log(solution([2, 6, 8, 14])); //168
