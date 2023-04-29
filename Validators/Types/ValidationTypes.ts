export type ValidatorFunction = "min" | "max" | "length";
// possible validation roles
export type AppValidatorUnitValidationRoles =
  | "number"
  | "email"
  | "string"
  | "required"
  | "accepted"
  | "afterToday"
  | `${ValidatorFunction}(${number})`;
