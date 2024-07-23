import { ValidationHelper } from "../ValidationHelper";

export function isEmailFunc(value: string): boolean {
  if (ValidationHelper.isEmpty(value)) return false;
  if (ValidationHelper.maxLen(254, value)) return false;

  const name = value.split("@")[0];

  if (ValidationHelper.maxLen(64, name)) return false;

  const domain = value.slice(value.indexOf("@") + 1);
  const firstDomain = domain.split(".")[0];

  if (firstDomain[0] === "-" || firstDomain.slice(-1) === "-") return false;

  if (ValidationHelper.maxLen(63, firstDomain)) return false;

  const regExp =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

  if (!regExp.test(value)) return false;

  if (value.includes(" ")) return false;

  return true;
}
