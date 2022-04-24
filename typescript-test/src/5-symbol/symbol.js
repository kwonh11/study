"use strict";
// interface Cylinder {
//     radius: number;
//     height: number;
// };
// const Cylinder = (radius: number, height: number) => ({radius, height});
class Cylinder {
    constructor() {
        this.radius = 1;
        this.height = 1;
    }
}
function calculateVolume(shape) {
    console.log(typeof shape);
    console.log(typeof shape.height);
    console.log(typeof shape["height"]);
    //   if (shape instanceof Cylinder) {
    //     console.log(typeof shape);
    //     console.log(typeof shape.height);
    //     console.log(typeof shape["height"]);
    //   }
}
calculateVolume(new Cylinder());
// calculateVolume(Cylinder);
