export function isEmptyFunc(
  value: null | number | string | undefined,
): boolean {
  if (typeof value === "undefined") return true;

  if (!value) return true;

  if (value === "") return true;

  return false;
}
