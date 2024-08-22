import { PhoneFormatHelper as PH } from "../PhoneFormatHelper";

describe("Метод mask в классе FormatPhoneHelper", () => {
  it("Если передать в метод null должна вернуться пустая строка", () => {
    const phone = PH.mask(null);

    expect(phone).toBe("");
  });

  it("Если передать в метод undefined должна вернуться пустая строка", () => {
    const phone = PH.mask(undefined);

    expect(phone).toBe("");
  });

  it("Если передать в метод число 12345678900 должна вернуться  строка '+1 (234) 567-89-00'", () => {
    const phone = PH.mask(12345678900);

    expect(phone).toBe("+1 (234) 567-89-00");
  });

  it("Если передать в метод строку '12345678900' должна вернуться  строка '+1 (234) 567-89-00'", () => {
    const phone = PH.mask("12345678900");

    expect(phone).toBe("+1 (234) 567-89-00");
  });
});
