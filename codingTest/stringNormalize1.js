function solution(str) {
  const changeText = (char, i) => {
    if (char === " ") return " ";
    return i % 2 === 0 ? char.toUpperCase(char) : char.toLowerCase(char);
  };
  return str
    .split(" ")
    .map((word) => [...word].map(changeText).join(""))
    .join(" ");
}

console.log(solution("try hello world"));
