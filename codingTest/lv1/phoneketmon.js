function solution(pocketmons) {
  const chance = pocketmons.length / 2;
  const uniqueCount = [...new Set(pocketmons)].length;
  return chance >= uniqueCount ? uniqueCount : chance;
}

console.log(solution([3, 3, 3, 2, 2, 2])); // 43
