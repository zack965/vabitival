"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
var NumbersCheckers_1 = require("./Checkers/NumbersCheckers");
var TimeCheckers_1 = require("./Checkers/TimeCheckers");
/* export interface ValidateOutput {
  [key: string]: {
    ValidateOutput: ValidateOutputUnit;
  };
} */
var Validate = function (data) {
    //console.log("jjjjj");
    //ValidationResultOfUnit[]
    var ValidationData = [];
    var ValidateOutputUnit = [];
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var validator = data_1[_i];
        var key = validator.key;
        for (var _a = 0, _b = validator.validationRoles; _a < _b.length; _a++) {
            var role = _b[_a];
            var results = validateValue(role, validator.value, validator.key);
            //console.log(results);
            if (!results.isValid) {
                ValidationData.push(results);
            }
        }
        ValidateOutputUnit.push({
            state: ValidationData.length == 0 ? true : false,
            data: ValidationData,
            key: key,
        });
        ValidationData = [];
    }
    return ValidateOutputUnit;
    /* for (const key in data) {
      const unit = data[key];
  
      for (const role of unit.validationRoles) {
        const results = validateValue(role, unit.value, unit.key);
        ValidationData.push(results);
      }
    } */
    //console.log(ValidationData);
    /* if (ValidationData.length == 0) {
      let final_output: ValidateOutput = {
        state: true,
        data: ValidationData,
      };
      return final_output;
    }
    let final_output: ValidateOutput = {
      state: false,
      data: ValidationData,
    };
    return final_output; */
    //return ValidationData;
};
exports.Validate = Validate;
/**
 * Implement validation logic of validation here
 * this function validate each value based on the array of validation roles and return instance of ValidationResultOfUnit
 */
function validateValue(role, value, key) {
    var IsValid = true;
    var errors = [];
    if (role == "required") {
        if (value == "") {
            IsValid = false;
            errors.push("the value of ".concat(key, " is required"));
        }
    }
    if (role == "string") {
        if (typeof value !== "string") {
            IsValid = false;
            errors.push("the value of ".concat(key, " is not a string"));
        }
    }
    if (role == "number") {
        if (typeof value !== "number") {
            IsValid = false;
            errors.push("the value of ".concat(key, " is not a number"));
        }
    }
    if (role == "afterToday") {
        if (!(0, TimeCheckers_1.isAfterToday)(value)) {
            IsValid = false;
            errors.push("the value of ".concat(key, " is not a valid date format or not a after today "));
        }
    }
    if (role == "email") {
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            IsValid = false;
            errors.push("the value of ".concat(key, " is not a valid mail"));
        }
    }
    var validatorFunctions = ["min", "max", "length"];
    var functionName = role.split("(")[0];
    if (validatorFunctions.includes(functionName)) {
        var _a = role.split("(").map(function (str) { return str.replace(")", ""); }), func = _a[0], param = _a[1];
        if (func == "min") {
            if (!(0, NumbersCheckers_1.CheckMin)(value, param)) {
                IsValid = false;
                errors.push("the value of ".concat(key, " is too small"));
            }
        }
        if (func == "max") {
            if (!(0, NumbersCheckers_1.CheckMax)(value, param)) {
                IsValid = false;
                errors.push("the value of ".concat(key, " is too big"));
            }
        }
    }
    var ValidationData = {
        isValid: IsValid,
        errors: errors,
        value: value,
    };
    return ValidationData;
}
//# sourceMappingURL=AppValidate.js.map