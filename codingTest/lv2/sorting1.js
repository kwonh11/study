// const normalize = (word) => {
//   const headRegEx = /[\d]/g;
//   const headSliceIndex = word.search(headRegEx);
//   const head = word.slice(0, headSliceIndex);
//   const headSliced = word.slice(headSliceIndex);

//   const midRegEx = /[^\d]/g;
//   const midSliceIndex =
//     headSliced.search(midRegEx) < 5 ? headSliced.search(midRegEx) : 5;
//   const mid = headSliced.slice(0, midSliceIndex);

//   const tail = headSliced.slice(midSliceIndex);
//   return [head, mid, tail];
// };

// function solution(files) {
//   const normalized = [...files].map(normalize);
//   normalized.sort((a, b) => {
//     return a[0].toLowerCase() === b[0].toLowerCase()
//       ? Number(a[1]) === Number(b[1])
//         ? !a[2] || !b[2]
//           ? 0
//           : a[2] - b[2]
//         : Number(a[1]) - Number(b[1])
//       : a[0].toLowerCase().localeCompare(b[0]);
//   });
//   return normalized.map((wordArray) => wordArray.join(""));
// }

// const pattern = /(\D+)(\d{1,5})/; 숫자
function solution(files) {
  const pattern = /(\D+)(\d{1,5})/;
  return files.sort((a, b) => {
    let [aHead, aNumber] = a.match(pattern).slice(1, 3);
    let [bHead, bNumber] = b.match(pattern).slice(1, 3);
    aHead = aHead.toLowerCase();
    bHead = bHead.toLowerCase();
    if (aHead === bHead && aNumber === bNumber) return 0;
    if (aHead === bHead) return aNumber - bNumber;
    if (aHead > bHead) return 1;
    else return -1;
  });
}
console.log(
  solution([
    "F-5555555 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
