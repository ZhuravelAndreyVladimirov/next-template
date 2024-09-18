export const minLen = (len: number, value: number | string): boolean => {
  return len > String(value).length;
};
