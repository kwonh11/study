function solution(N, userStages) {
  const stages = new Array(N).fill(1).map((_, i) => i + 1);
  const rate = stages.map((cr, i) => {
    const challenged = userStages.filter((stage) => stage >= cr).length;
    const failed = userStages.filter((stage) => stage === cr).length;
    return {
      stage: cr,
      rate: failed === 0 ? 0 : failed / challenged,
    };
  });
  rate.sort((a, b) => b.rate - a.rate);
  return rate.map((v) => v.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
