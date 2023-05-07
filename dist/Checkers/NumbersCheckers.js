"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckRangeNumber = exports.CheckMax = exports.CheckMin = void 0;
var CheckMin = function (value, param) {
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
var CheckMax = function (value, param) {
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
var CheckRangeNumber = function (min, max, value) {
    if (value > min && value < max) {
        return true;
    }
    return false;
};
exports.CheckRangeNumber = CheckRangeNumber;
//# sourceMappingURL=NumbersCheckers.js.map