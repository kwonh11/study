// interface Cylinder {
//     radius: number;
//     height: number;
// };
// const Cylinder = (radius: number, height: number) => ({radius, height});

class Cylinder {
  radius = 1;
  height = 1;
}
interface Cylinder2 extends Cylinder {
  color: string;
}
const Cylinder2: Cylinder2 = {
  radius: 1,
  height: 1,
  color: "red",
};
const cylinderRadius1: Cylinder["radius"] = 1;
const omitted: Omit<Cylinder, "radius"> = {
  height: 1,
};
// const cylinderRadius2: Cylinder.radius = 1; 에러
type C = InstanceType<typeof Cylinder>;
function calculateVolume(shape: C) {
  console.log(typeof shape);
  console.log(typeof shape.height);
  console.log(typeof shape["height"]);
}
calculateVolume(new Cylinder());
