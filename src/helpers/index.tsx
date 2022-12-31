// check if value is empty or not
export const isEmpty = (val: any) => {
  if (Array.isArray(val)) return !val.length;
  if (typeof val === "object") return !Object.keys(val).length;
  return !val;
};
