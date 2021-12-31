function solution(sizes) {
  const arranged = sizes.map((size) =>
    size[0] > size[1] ? size : [size[1], size[0]]
  );
  const [longs, shorts] = arranged.reduce(
    (ac, cr, i) => {
      ac[0].push(cr[0]);
      ac[1].push(cr[1]);
      return ac;
    },
    [[], []]
  );
  const width = Math.max(...longs);
  const height = Math.max(...shorts);
  return width * height;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
); // 4000
