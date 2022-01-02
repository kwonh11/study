function cmp(a, b) {
  return a - b;
}

function solution(A, B) {
  var n = A.length;
  var m = B.length;
  A.sort(cmp);
  B.sort(cmp);
  var i = 0;
  for (var k = 0; k < n; k++) {
    if (i < m - 1 && !B.includes(A[k])) i += 1;
    if (B.includes(A[k])) return A[k];
  }
  return -1;
}
console.log(solution([1, 3, 2, 1], [4, 2, 5, 3, 2]));
