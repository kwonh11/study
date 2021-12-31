function solution(d, budget) {
  d.sort((a, b) => a - b);
  const departmentsApplied = d.reduce((ac, cr) => {
    const total = ac.reduce((acc, crr) => acc + crr, 0);
    return total + cr <= budget ? [...ac, cr] : [...ac];
  }, []);
  return departmentsApplied.length;
}

console.log(solution([1, 2, 3, 5, 4], 9));
