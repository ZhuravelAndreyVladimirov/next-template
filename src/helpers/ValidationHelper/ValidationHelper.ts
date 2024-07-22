// type LenMinMAxProps = {
//   max: number;
//   min: number;
//   value: number | string;
// };
export class ValidationHelper {
  /**
   *
   * @param {string} value Verified email
   * @returns {boolean} is the transmitted email address valid
   * @example
   * ValidationHelper.isEmail('')                 // false
   * ValidationHelper.isEmail('plainaddress')     // false
   * ValidationHElper.isEmail('email@domain.com') // true
   */
  static isEmail(value: string): boolean {
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
  /**
   *
   * @param {string | number|undefined | null} value string | number | undefined | null
   * @returns {boolean} If the value is empty, it returns true, otherwise false
   * @example
   * ValidationHelper.isEmpty('123')     // false
   * ValidationHelper.isEmpty(1)         // false
   * ValidationHelper.isEmpty('')        // true
   * ValidationHelper.isEmpty(null)      // true
   * ValidationHelper.isEmpty(undefined) // true
 
   */
  static isEmpty(value: null | number | string | undefined): boolean {
    if (typeof value === "undefined") return true;

    if (!value) return true;

    if (value === "") return true;

    return false;
  }

  /**
   *
   * @param param0
   * @returns
   */
  // static lenMinMax({ max, min }: LenMinMAxProps): boolean {
  //   return true;
  // }

  /**
   *
   * @param {number} len maximum length including this value
   * @param {string | number} value the value being checked
   * @returns {boolean} if the length of the transmitted value is greater than the including value, it returns true otherwise false
   * @example
   * ValidationHelper.maxLen(5, '123456') // true
   * ValidationHelper.maxLen(5, '12345')  // false
   * ValidationHelper.maxLen(5, '1234')   // false
   */
  static maxLen(len: number, value: number | string): boolean {
    return len < String(value).length;
  }

  /**
   *
   * @param {number} len the minimum length of the value to be checked
   * @param value the value being checked
   * @returns {boolean} if the transmitted value is less than the transmitted minimum value, it returns true otherwise false.
   * @example
   * ValidationHElper.minLen(5, '1234')   // true
   * ValidationHElper.minLen(5, '12345')  // false
   * ValidationHElper.minLen(5, '123465') // false
   */
  static minLen(len: number, value: number | string): boolean {
    return len > String(value).length;
  }
}
