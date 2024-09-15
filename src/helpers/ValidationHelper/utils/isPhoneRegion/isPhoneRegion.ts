import { ValidationHelper } from "../../ValidationHelper";
type Zone = "ru";

const phoneZone = {
  ru: {
    len: 11,
  },
};
export function isPhoneRegionFunc(value: number | string, zone: Zone) {
  if (!ValidationHelper.fixLen(phoneZone[zone].len, value)) return false;
  return true;
}
