export const CheckMin = (value: string | number, param: string): boolean => {
  if (typeof value === "string") {
    if (value.length < parseInt(param)) {
      return false;
    }
  }
  if (typeof value === "number") {
    if (value < parseInt(param)) {
      return false;
    }
  }
  return true;
};
export const CheckMax = (value: string | number, param: string): boolean => {
  if (typeof value === "string") {
    if (value.length > parseInt(param)) {
      return false;
    }
  } else if (typeof value === "number") {
    if (value > parseInt(param)) {
      return false;
    }
  }
  return true;
};
export const CheckRangeNumber = (
  min: number,
  max: number,
  value: number
): boolean => {
  if (value > min && value < max) {
    return true;
  }
  return false;
};
