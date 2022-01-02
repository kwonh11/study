function solution(n) {
  let step = n;
  let usedEnergy = 0;
  while (step > 0) {
    if (step % 2 === 0) {
      step = step / 2;
    }
    if (step % 2 === 1) {
      step--;
      usedEnergy++;
    }
  }
  return usedEnergy;
}
