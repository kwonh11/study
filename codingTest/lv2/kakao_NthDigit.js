function solution(n, t, m, p) {
  let characters = [];
  let mine = [];
  let num = 0;
  while (true) {
    characters.push(...num.toString(n).toUpperCase());
    num++;
    if (characters.length >= m * t) break;
  }
  [...characters].forEach((char, i) => {
    if (i % m === p - 1) {
      mine.length < t ? mine.push(char) : "";
    }
  });
  return mine.join("");
}

console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
