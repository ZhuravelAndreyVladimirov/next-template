export const convertHtmlProp = (
  prop: string | number,
  scale: number | undefined = 16
): string => {
  return typeof prop === "number" ? `${prop / scale}rem` : prop;
};
