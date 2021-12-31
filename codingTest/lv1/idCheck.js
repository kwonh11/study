const input1 = "...!@BaT#*..y.abcdefghijklm";
const input2 = "z-+.^.";
const input3 = "=.=";
const input4 = "123_.def";
const input5 = "abcdefghijklmn.p";

function removeDuplicatedDot(strParam) {
  const str = strParam.replace("..", ".");
  return str.includes("..") ? removeDuplicatedDot(str) : str;
}
const reg = new RegExp(/[^[a-z0-9-_.]/g);

function test(test_id) {
  return test_id[0] !== "." && test_id[test_id.length - 1] !== ".";
}
function solution(new_id) {
  const step1 = new_id.toLowerCase();
  const step2 = step1.replace(reg, "");
  const step3 = step2.includes("..") ? removeDuplicatedDot(step2) : step2;
  const step4 = step3
    .split("")
    .map((s, i) =>
      (s === "." && i === 0) || (s === "." && i === step3.length - 1) ? "" : s
    )
    .filter((v) => v)
    .join("");
  const step5 = step4 === "" ? "a" : step4;
  const step6 = step5.length >= 16 ? step5.slice(0, 15) : step5;
  const lastCharacter = step6[step6.length - 1];
  const step7 =
    step6.length <= 2 ? step6 + lastCharacter.repeat(3 - step6.length) : step6;
  return test(step7) ? step7 : solution(step7);
}

console.log(solution(input1));
// console.log(solution(input2));
// console.log(solution(input3));
// console.log(solution(input4));
// console.log(solution(input5));

/**
 *
 *아래 정답
 */
const solution = (new_id) => {
  const id = String(new_id)
    .toLowerCase()
    .replace(/[^\w\d-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.|\.$/g, "")
    .padEnd(1, "a")
    .slice(0, 15)
    .replace(/^\.|\.$/g, "");
  return id.padEnd(3, id[id.length - 1]);
};
