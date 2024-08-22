import { PriceFormatHelper as PH } from "../PriceFormatHelper";

describe("Сериализация в int PriceFormatHelper метод serializationInt", () => {
  it("Проверка если передать null в метод serializationInt должно вернуть null", () => {
    const price = PH.serializationInt(null);

    expect(price).toBe(null);
  });

  it("Проверка если передать undefined в метод serializationInt должно вернуть null", () => {
    const price = PH.serializationInt(undefined);

    expect(price).toBe(null);
  });

  it("Проверка если передать число 1234 в метод serializationInt должно вернуть 1234", () => {
    const price = PH.serializationInt(1234);

    expect(price).toBe(1234);
  });
  it("Проверка если передать число 1234.12 в метод serializationInt должно вернуть 1234", () => {
    const price = PH.serializationInt(1234.12);

    expect(price).toBe(1234);
  });
  it("Проверка если передать строку '1234' в метод serializationInt должно вернуть 1234", () => {
    const price = PH.serializationInt("1234");

    expect(price).toBe(1234);
  });

  it("Проверка если передать строку '1234.123' в метод serializationInt должно вернуть 1234123", () => {
    const price = PH.serializationInt("1234.123");

    expect(price).toBe(1234123);
  });

  it("Проверка если передать строку '12sad34.1asd23' в метод serializationInt должно вернуть 1234123", () => {
    const price = PH.serializationInt("12asd34.1asd23");

    expect(price).toBe(1234123);
  });
});
