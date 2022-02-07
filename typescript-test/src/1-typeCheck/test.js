"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const obj = {
    type: "string",
    text: "hello typescript",
};
function test() {
    if ("type" in obj) {
        console.log(obj.text);
    }
}
exports.default = test;
