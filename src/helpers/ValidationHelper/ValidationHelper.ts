import { isEmailFunc, isEmptyFunc, isPhoneRegionFunc } from "./utils";

type LenMinMAxProps = {
  max: number;
  min: number;
};

type Zone = "ru";
// type PhoneZone = [string] =string;

export class ValidationHelper {
  static phoneZone = {
    ru: {
      len: 11,
    },
  };
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
    return isEmailFunc(value);
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
    return isEmptyFunc(value);
  }
  /**
   *
   * @description Возвращает true если телефон соответствует переданному региону false если нет
   * @alpha
   * Не написаны тесты!!!!
   *
   *
   */

  static isPhoneRegion(value: number | string, zone: Zone = "ru") {
    return isPhoneRegionFunc(value, zone);
  }
  /**
   *
   * @param {number} length
   * @param {number | string} value
   * @returns {boolean}
   * @description Функция возвращает равно ли значение переданной длине
   * Не написаны тесты!!!!
   */

  static len(length: number, value: number | string): boolean {
    return length === String(value).length;
  }

  /**
   * @param {string | number} value
   * @param {LenMinMAxProps} obj
   * @returns {boolean}
   * @description Функция проверяет на то соответствует ли переданное значение указанному интервалу
   * Не написаны тесты!!!!
   *
   */
  static lenInterval(value: number | string, obj: LenMinMAxProps): boolean {
    return (
      ValidationHelper.maxLen(obj.max, value) &&
      ValidationHelper.minLen(obj.min, value)
    );
  }

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
