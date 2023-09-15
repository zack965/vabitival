import { IAppValidatorUnit } from "./IValidators/IValidators";
import ValidationResultOfUnit from "./IValidators/IValidators";
/**
 * this the main validate function
 * it gets array of key and object represent the roles of validation
 * and it return the state of validation
 */
export interface ValidateOutputUnit {
    key: string;
    state: boolean;
    data: ValidationResultOfUnit[];
}
export declare const Validate: (data: IAppValidatorUnit[]) => ValidateOutputUnit[];
