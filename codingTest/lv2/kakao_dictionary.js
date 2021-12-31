const dictionary = Array(26)
  .fill(0)
  .map((_, i) => {
    return String.fromCharCode(i + 65);
  });
const getIndex = (char) => {
  const index = dictionary.findIndex((v) => v === char);
  return index + 1;
};
function solution(n) {
  let numbers = [];
  const regist = (word, nextIndex, repeated = 0) => {
    const nextChar = n[nextIndex];
    const found = dictionary.findIndex(word + nextChar);
    if (found >= 0) {
      regist(word + nextChar, nextIndex + 1, 1);
    } else {
      return found;
    }
  };
  for (let a = 0; a < n.length; a++) {
    n[a];
  }
  return result;
}

console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
console.log(dictionary);
