type Phone = null | number | string | undefined;

export class PhoneFormatHelper {
  /**
   * @static
   * @param {Phone} phone
   * @returns {string}
   * @description The method formats the transmitted number to the format of a Russian phone number
   * @example
   * PhoneFormatHelper.mask("12345678900") // "+1 (234) 567-89-00"
   *
   */
  static mask(phone: Phone): string {
    if (!phone) {
      return "";
    }

    const val = String(PhoneFormatHelper.serialization(phone));

    return (
      `+${val.substring(0, 1)} (${val.substring(1, 4)}) ` +
      `${val.substring(4, 7)}-${val.substring(7, 9)}-${val.substring(9, 11)}`
    );
  }
  /**
   *
   * @static
   * @param {Phone} phone
   * @returns {null | number}
   * @description The method serializes the passed phone number and returns it as number
   * @example
   * PhoneFormatHelper.serialization("+1 (234) 567-89-00") //12345678900
   */
  static serialization(phone: Phone): null | number {
    if (!phone && typeof phone !== "string") {
      return null;
    }

    if (typeof phone === "number") {
      return phone;
    }

    return Number.parseInt(phone.replace(/[^0-9]/g, ""));
  }
}
