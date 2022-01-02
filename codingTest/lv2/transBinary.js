function solution(s) {
  let omittedTotal = 0;
  let count = 0;
  const process = (s) => {
    count++;
    const omitted = [...s].filter((v) => v === "1").join("");
    const proceed = Number(omitted.length).toString(2);
    omittedTotal += s.length - omitted.length;
    if (proceed === "1") {
      return;
    } else {
      process(proceed);
    }
  };
  process(s);
  return [count, omittedTotal];
}

console.log(solution("110010101001"));
