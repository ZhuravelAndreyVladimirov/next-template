export const fixLen = (len: number, value: null | number | string) => {
  if (!value && typeof value !== "number") {
    return false;
  }

  return len === String(value).length;
};
