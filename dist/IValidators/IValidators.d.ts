import { AppValidatorUnitValidationRoles } from "../Types/ValidationTypes";
export default interface ValidationResultOfUnit {
    isValid: boolean;
    errors?: string[];
    value: string;
}
export interface IAppValidatorUnit {
    key: string;
    value: string | number;
    validationRoles: AppValidatorUnitValidationRoles[];
}
