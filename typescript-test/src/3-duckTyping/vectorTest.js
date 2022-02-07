"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateLength(v) {
    return Math.sqrt(v.x * v.x + v.y + v.y);
}
const v = { x: 3, y: 4, name: "named" };
exports.default = () => {
    calculateLength(v);
};
