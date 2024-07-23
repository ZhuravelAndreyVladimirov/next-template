import { ValidationHelper } from "../ValidationHelper";
type Zone = "ru";

export function isPhoneRegionFunc(value: number | string, zone: Zone) {
  if (!ValidationHelper.len(ValidationHelper.phoneZone[zone].len, value))
    return false;
  return true;
}
