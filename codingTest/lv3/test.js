// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function compare(a, b) {
  return a.charCodeAt() - b.charCodeAt() > 0;
}

function solution(A) {
  const arr = [...A].map((v, i) => {
    const temp = [...A];
    temp.splice(i, 1);
    return temp.join("");
  });
  arr.sort((a, b) => a.localeCompare(b));
  return arr[0];
}
