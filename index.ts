import { Validate } from "./Validators/AppValidate";

console.log("first");

const data = Validate([
  {
    value: "ksdjchvskdjc",
    key: "email",
    validationRoles: ["string", "email", "min(2)", "afterToday"],
  },
]);
console.log(data);
