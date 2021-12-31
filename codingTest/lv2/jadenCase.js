// JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다.
// 문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수, solution을 완성해주세요.

function changeWord(word) {
  const [first, ...rest] = [...word];
  const changedFirst = first ? first.toUpperCase() : "";
  const changedRest = rest ? rest.join("").toLowerCase() : "";
  return changedFirst + changedRest;
}
function solution(s) {
  return s.split(" ").map(changeWord).join(" ");
}

console.log(solution("3people   unFollowed me"));
