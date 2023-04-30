"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckMax = exports.CheckMin = void 0;
const CheckMin = (value, param) => {
    if (typeof value === "string") {
        if (value.length > parseInt(param)) {
            return false;
        }
    }
    if (typeof value === "number") {
        if (value > parseInt(param)) {
            return false;
        }
    }
    return true;
};
exports.CheckMin = CheckMin;
const CheckMax = (value, param) => {
    if (typeof value === "string") {
        if (value.length > parseInt(param)) {
            return false;
        }
    }
    else if (typeof value === "number") {
        if (value > parseInt(param)) {
            return false;
        }
    }
    return true;
};
exports.CheckMax = CheckMax;
//# sourceMappingURL=NumbersCheckers.js.map