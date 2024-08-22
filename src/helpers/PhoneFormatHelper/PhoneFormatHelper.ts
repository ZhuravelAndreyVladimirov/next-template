type PhoneMask = null | number | string | undefined;
type PhoneSerialization = null | number | string | undefined;

export class PhoneFormatHelper {
  static mask(phone: PhoneMask): string {
    if (!phone) {
      return "";
    }

    const val = String(PhoneFormatHelper.serialization(phone));

    return (
      `+${val.substring(0, 1)} (${val.substring(1, 4)}) ` +
      `${val.substring(4, 7)}-${val.substring(7, 9)}-${val.substring(9, 11)}`
    );
  }

  static serialization(phone: PhoneSerialization): null | number {
    if (!phone && typeof phone !== "string") {
      return null;
    }

    if (typeof phone === "number") {
      return phone;
    }

    return Number.parseInt(phone.replace(/[^0-9]/g, ""));
  }
}
