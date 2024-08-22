type PhoneMask = null | number | string | undefined;

export class PhoneFormatHelper {
  static mask(phone: PhoneMask): string {
    if (!phone) {
      return "";
    }

    return String(phone).replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      "+$1 ($2) $3-$4-$5",
    );
  }
}
