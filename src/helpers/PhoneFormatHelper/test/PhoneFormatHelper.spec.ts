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

  it("Если передать в метод не полную  строку '123456789' должна вернуться  строка '+1 (234) 567-89-'", () => {
    const phone = PH.mask("123456789");

    expect(phone).toBe("+1 (234) 567-89-");
  });

  it("Если передать в метод строку '1234567890т' должна вернуться  строка '+1 (234) 567-89-0'", () => {
    const phone = PH.mask("1234567890т");

    expect(phone).toBe("+1 (234) 567-89-0");
  });
});
describe("Метод serialization в классе FormatPhoneHelper", () => {
  it("Если передать в метод null должна вернуться null", () => {
    const phone = PH.serialization(null);

    expect(phone).toBe(null);
  });

  it("Если передать в метод undefined должно вернуть null", () => {
    const phone = PH.serialization(undefined);

    expect(phone).toBe(null);
  });

  it("Если передать в метод  строка '+1 (234) 567-89-00' должно вернуться число 12345678900 ", () => {
    const phone = PH.serialization("+1 (234) 567-89-00");

    expect(phone).toBe(12345678900);
  });

  it("Если передать в метод  строку c буквами 'ывоарывп22фыв3фыв12ывфы' должно вернуться число 22312", () => {
    const phone = PH.serialization("ывоарывп22фыв3фыв12ывфы");

    expect(phone).toBe(22312);
  });

  it("Если передать в метод  число 22312 должно вернуться число 22312", () => {
    const phone = PH.serialization(22312);

    expect(phone).toBe(22312);
  });
});
