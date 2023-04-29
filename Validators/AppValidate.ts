import { CheckMax, CheckMin } from "./Checkers/NumbersCheckers";
import { isAfterToday } from "./Checkers/TimeCheckers";
import {
  IAppValidatorUnit,
  ValidationResultOfUnit,
} from "./IValidators/IValidators";
import {
  AppValidatorUnitValidationRoles,
  ValidatorFunction,
} from "./Types/ValidationTypes";

/**
 * this the main validate function
 * it gets array of key and object represent the roles of validation
 * and it return the state of validation
 */
export const Validate = (
  data: IAppValidatorUnit[]
): ValidationResultOfUnit[] => {
  const ValidationData: ValidationResultOfUnit[] = [];
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

/**
 * Implement validation logic of validation here
 * this function validate each value based on the array of validation roles and return instance of ValidationResultOfUnit
 */
function validateValue(
  role: AppValidatorUnitValidationRoles,
  value: string | number,
  key: string
): ValidationResultOfUnit {
  let IsValid = true;
  const errors: string[] = [];
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
    if (!isAfterToday(value as string)) {
      IsValid = false;
      errors.push(
        `the value of ${key} is not a valid date format or not a after today `
      );
    }
  }
  if (role == "email") {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value as string)) {
      IsValid = false;
      errors.push(`the value of ${key} is not a valid mail`);
    }
  }
  const validatorFunctions: ValidatorFunction[] = ["min", "max", "length"];
  const functionName = role.split("(")[0];
  if (validatorFunctions.includes(functionName as ValidatorFunction)) {
    const [func, param] = role.split("(").map((str) => str.replace(")", ""));
    if (func == "min") {
      if (!CheckMin(value, param)) {
        IsValid = false;
        errors.push(`the value of ${key} is too small`);
      }
    }
    if (func == "max") {
      if (!CheckMax(value, param)) {
        IsValid = false;
        errors.push(`the value of ${key} is too big`);
      }
    }
  }
  const ValidationData: ValidationResultOfUnit = {
    isValid: IsValid,
    errors: errors,
    value: value as string,
  };
  return ValidationData;
}
