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

  it("Проверка если передать строку 'asdf.' в метод serializationInt должно вернуть null", () => {
    const price = PH.serializationInt("asdf.");

    expect(price).toBe(null);
  });

  it("Проверка если передать строку '100 000 000' в метод serializationInt должно вернуть 100000000", () => {
    const price = PH.serializationInt("100 000 000");

    expect(price).toBe(100000000);
  });
});

describe("Проверка метода maskInt класса PriceFormatHelper", () => {
  it("Проверка если передать строку '100000000' в метод maskInt должно вернуть '100 000 000'", () => {
    const price = PH.maskInt("100000000");

    expect(price).toBe("100 000 000");
  });

  it("Проверка если передать число 100000000  в метод maskInt должно вернуть '100 000 000'", () => {
    const price = PH.maskInt(100000000);

    expect(price).toBe("100 000 000");
  });

  it("Проверка если передать строку 100ваы0000ыва00  в метод maskInt должно вернуть '100 000 000'", () => {
    const price = PH.maskInt("100ваы0000ыва00");

    expect(price).toBe("100 000 000");
  });

  it("Проверка если передать строку '100 000 000 00'  в метод maskInt должно вернуть '10 000 000 000'", () => {
    const price = PH.maskInt("100 000 000 00");

    expect(price).toBe("10 000 000 000");
  });

  it("Проверка если передать строку '100 000 000 00e'  в метод maskInt должно вернуть '10 000 000 000'", () => {
    const price = PH.maskInt("100 000 000 00e");

    expect(price).toBe("10 000 000 000");
  });

  it("Проверка если передать строку '100+000-000=00'  в метод maskInt должно вернуть '10 000 000 000'", () => {
    const price = PH.maskInt("100+000-000=00");

    expect(price).toBe("10 000 000 000");
  });
});

describe("Проверка метода serializationFloat класса PriceFormatHelper", () => {
  it("Проверка передачи строки '100 000 000.12' ожидаемый результат 100000000.12", () => {
    const price = PH.serializationFloat("100 000 000.12");
    expect(price).toBe(100000000.12);
  });

  it("Проверка передачи строки '100 000 000.1' ожидаемый результат 100000000.1", () => {
    const price = PH.serializationFloat("100 000 000.1");
    expect(price).toBe(100000000.1);
  });

  it("Проверка передачи строки '100 000 000.' ожидаемый результат 100000000", () => {
    const price = PH.serializationFloat("100 000 000.");
    expect(price).toBe(100000000);
  });

  it("Проверка передачи строки '100,00' ожидаемый результат 10000", () => {
    const price = PH.serializationFloat("100,00");
    expect(price).toBe(10000);
  });

  it("Проверка передачи строки 'asdasd,' ожидаемый результат 10000", () => {
    const price = PH.serializationFloat("asdasd,");
    expect(price).toBe(null);
  });

  it("Проверка передачи строки '100 000 000....' ожидаемый результат 100000000", () => {
    const price = PH.serializationFloat("100 000 000....");
    expect(price).toBe(100000000);
  });

  it("Проверка передачи строки '100 o00 000' ожидаемый результат 10000000", () => {
    const price = PH.serializationFloat("100 o00 000");
    expect(price).toBe(10000000);
  });
});

describe("Проверка метода maskFloat класса PriceFormatHelper", () => {
  it("Проверка передачи строки '100 0000.12' ожидаемый результат 1 000 000.12", () => {
    const price = PH.maskFloat("100 0000.12");
    expect(price).toBe("1 000 000.12");
  });
});
