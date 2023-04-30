export type ValidatorFunction = "min" | "max" | "length";
export type AppValidatorUnitValidationRoles = "number" | "email" | "string" | "required" | "accepted" | "afterToday" | `${ValidatorFunction}(${number})`;
