function getCount(num) {
  return [...num.toString(2)].filter((v) => v === "1").length;
}

function solution(n) {
  const count = getCount(n);
  let num = n;
  while (true) {
    num++;
    if (count === getCount(num)) {
      break;
    }
  }
  return parseInt(num);
}

console.log(solution(78)); // 83
