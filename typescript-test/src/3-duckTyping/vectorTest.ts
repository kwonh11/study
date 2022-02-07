interface Vector2D {
  x: number;
  y: number;
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y + v.y);
}
interface NamedVector {
  x: number;
  y: number;
  name: string;
}
const v: NamedVector = { x: 3, y: 4, name: "named" };

export default () => {
  calculateLength(v);
};
