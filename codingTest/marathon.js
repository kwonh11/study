function solution(participant, completion) {
  participant.sort();
  completion.sort();
  return participant.find((name, i) => name !== completion[i]);
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // 43
