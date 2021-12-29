const regexps = [
  new RegExp(/zero/gi),
  new RegExp(/one/gi),
  new RegExp(/two/gi),
  new RegExp(/three/gi),
  new RegExp(/four/gi),
  new RegExp(/five/gi),
  new RegExp(/six/gi),
  new RegExp(/seven/gi),
  new RegExp(/eight/gi),
  new RegExp(/nine/gi),
];
// function checker(ac, word, i) {
//   const changed = ac.replace(word, i + 1);
//   return changed.includes(word) ? checker(changed, word, i) : changed;
// }
// function solution(s) {
//   const result = words.reduce(checker, String(s));
//   console.log(result);
//   return Number(result);
// }
function checker(ac, regex, i) {
  return ac.replace(regex, i);
}
function solution(s) {
  const result = regexps.reduce(checker, String(s));
  return Number(result);
}
console.log(solution("2three45seven4six5sixsevenseven"));
