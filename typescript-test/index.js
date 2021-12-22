"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeTest_1 = __importDefault(require("./src/typeCheck/typeTest"));
const overloadingTest_1 = __importDefault(require("./src/typeCheck/overloadingTest"));
const vectorTest_1 = __importDefault(require("./src/duckTyping/vectorTest"));
(0, typeTest_1.default)();
(0, overloadingTest_1.default)();
(0, vectorTest_1.default)();
