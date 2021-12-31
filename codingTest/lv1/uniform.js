function solution(lost, reserve) {
  const totalStudents = Math.max(...[lost, reserve].flat());
  const uniforms = new Array(totalStudents).fill(1).map((v, i) => {
    const isLost = lost.includes(i + 1);
    const isReserve = reserve.includes(i + 1);
    return v + (isLost ? -1 : 0) + (isReserve ? 1 : 0);
  });
  const shared = [...uniforms];
  uniforms.forEach((_, i) => {
    if (shared[i] >= 2) {
      if (i - 1 >= 0 && shared[i - 1] === 0) {
        shared[i - 1]++;
        shared[i]--;
      }
      if (i + 1 <= totalStudents - 1 && shared[i + 1] === 0) {
        shared[i + 1]++;
        shared[i]--;
      }
    }
  });
  return shared.length;
}

console.log(solution([2, 4], [1, 3, 5])); // 5
