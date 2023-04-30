import { AppValidatorUnitValidationRoles } from "../Types/ValidationTypes";

// this interface represent the state of the validation
export interface ValidationResultOfUnit {
  isValid: boolean;
  errors?: string[];
  value: string;
}

// this interface represent the structure of the validation global roles
export interface IAppValidatorUnit {
  key: string;
  value: string | number;
  validationRoles: AppValidatorUnitValidationRoles[];
}
