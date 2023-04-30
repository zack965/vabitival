import { IAppValidatorUnit, ValidationResultOfUnit } from "./IValidators/IValidators";
/**
 * this the main validate function
 * it gets array of key and object represent the roles of validation
 * and it return the state of validation
 */
export declare const Validate: (data: IAppValidatorUnit[]) => ValidationResultOfUnit[];
