"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Validate = void 0;
const NumbersCheckers_1 = require("./Checkers/NumbersCheckers");
const TimeCheckers_1 = require("./Checkers/TimeCheckers");
/**
 * this the main validate function
 * it gets array of key and object represent the roles of validation
 * and it return the state of validation
 */
const Validate = (data) => {
    const ValidationData = [];
    for (const validator of data) {
        for (const role of validator.validationRoles) {
            const results = validateValue(role, validator.value, validator.key);
            ValidationData.push(results);
        }
    }
    /* for (const key in data) {
      const unit = data[key];
  
      for (const role of unit.validationRoles) {
        const results = validateValue(role, unit.value, unit.key);
        ValidationData.push(results);
      }
    } */
    return ValidationData;
};
exports.Validate = Validate;
/**
 * Implement validation logic of validation here
 * this function validate each value based on the array of validation roles and return instance of ValidationResultOfUnit
 */
function validateValue(role, value, key) {
    let IsValid = true;
    const errors = [];
    if (role == "required") {
        if (value == "") {
            IsValid = false;
            errors.push(`the value of ${key} is required`);
        }
    }
    if (role == "string") {
        if (typeof value !== "string") {
            IsValid = false;
            errors.push(`the value of ${key} is not a string`);
        }
    }
    if (role == "number") {
        if (typeof value !== "number") {
            IsValid = false;
            errors.push(`the value of ${key} is not a number`);
        }
    }
    if (role == "afterToday") {
        if (!(0, TimeCheckers_1.isAfterToday)(value)) {
            IsValid = false;
            errors.push(`the value of ${key} is not a valid date format or not a after today `);
        }
    }
    if (role == "email") {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            IsValid = false;
            errors.push(`the value of ${key} is not a valid mail`);
        }
    }
    const validatorFunctions = ["min", "max", "length"];
    const functionName = role.split("(")[0];
    if (validatorFunctions.includes(functionName)) {
        const [func, param] = role.split("(").map((str) => str.replace(")", ""));
        if (func == "min") {
            if (!(0, NumbersCheckers_1.CheckMin)(value, param)) {
                IsValid = false;
                errors.push(`the value of ${key} is too small`);
            }
        }
        if (func == "max") {
            if (!(0, NumbersCheckers_1.CheckMax)(value, param)) {
                IsValid = false;
                errors.push(`the value of ${key} is too big`);
            }
        }
    }
    const ValidationData = {
        isValid: IsValid,
        errors: errors,
        value: value,
    };
    return ValidationData;
}
//# sourceMappingURL=AppValidate.js.map