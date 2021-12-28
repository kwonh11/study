function solution(phone_number) {
  const lastNumber = phone_number.slice(-4);
  return lastNumber.padStart(phone_number.length, "*");
}
console.log(solution("01033334444"));
