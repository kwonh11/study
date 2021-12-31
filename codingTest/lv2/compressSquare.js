function isPressable(arr) {
  const value = arr[0][0];
  return arr.every((sub) => sub.every((v) => v === value));
}
function doSlice(arr) {
  const breakPoint = arr.length / 2;
  return [arr.slice(0, breakPoint), arr.slice(breakPoint)];
}
function devide(arr) {
  const [upArr, downArr] = doSlice(arr);
  let upRight = [];
  const upLeft = upArr.map((a) => {
    const [left, right] = doSlice(a);
    upRight.push(right);
    return left;
  });
  let downRight = [];
  const downLeft = downArr.map((a) => {
    const [left, right] = doSlice(a);
    downRight.push(right);
    return left;
  });
  return [upLeft, upRight, downLeft, downRight];
}
function solution(n) {
  if (isPressable(n)) {
    return n[0][0] === 1 ? [0, 1] : [1, 0];
  }

  const arrays = devide(n);
  const result = 0;
  return result;
}

const square = [
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
];

console.log(solution(square));
