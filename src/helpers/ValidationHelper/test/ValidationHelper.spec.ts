import { ValidationHelper } from "./ValidationHelper";

describe("ValidationHelper. Checking for an empty value", () => {
  it("Checking the value of a string", () =>
    expect(ValidationHelper.isEmpty("string")).toBe(false));

  it("Checking the value of a number", () =>
    expect(ValidationHelper.isEmpty(5)).toBe(false));

  it("Checking the value of an empty string", () =>
    expect(ValidationHelper.isEmpty("")).toBe(true));

  it("Checking the null value", () =>
    expect(ValidationHelper.isEmpty(null)).toBe(true));

  it("Checking the undefined value", () =>
    expect(ValidationHelper.isEmpty(undefined)).toBe(true));
});

describe("ValidationHelper. Checking max length string", () => {
  it("The string is longer than the maximum value", () =>
    expect(ValidationHelper.maxLen(5, "123456")).toBe(true));

  it("The string is equal to the value being passed", () =>
    expect(ValidationHelper.maxLen(5, "12345")).toBe(false));

  it("The string is less than the transmitted value", () =>
    expect(ValidationHelper.maxLen(5, "1234")).toBe(false));
});

describe("ValidationHelper. ", () => {
  it("Строка меньше указанного значения", () =>
    expect(ValidationHelper.minLen(5, "1234")).toBe(true));

  it("Строка равна указанному значению", () =>
    expect(ValidationHelper.minLen(5, "12345")).toBe(false));

  it("Строка больше указанного значения", () =>
    expect(ValidationHelper.minLen(5, "123456")).toBe(false));
});

describe("ValidationHelper валидные email", () => {
  function isTrue(mail: string, name: string = "") {
    it(name, () => expect(ValidationHelper.isEmail(mail)).toBe(true));
  }

  isTrue("email@domain.com", "Валидный email");
  isTrue("firstname.lastname@domain.com", "Email содержит точку в поле адреса");
  isTrue("email@subdomain.domain.com", "Email содержит точку в субдомене");
  isTrue("email@subdomain.domain.com", "Email содержит точку в субдомене");
  isTrue("firstname+lastname@domain.com", "Знак плюс разрешен");
  isTrue("email@123.123.123.123", "IP адрес валидного домена");
  isTrue("1234567890@domain.com", "Цифры разрешены");
  isTrue("email@domain-one.com", "Тире в доменной части разрешено");
  isTrue("_______@domain.com", "Подчеркивания в адресе разрешены");
  isTrue("email@domain.name", ".name is valid Top Level Domain name");
  isTrue(
    "email@domain.co.jp",
    "Dot in Top Level Domain name also considered valid (use co.jp as example here)",
  );
  isTrue("firstname-lastname@domain.com", "Тире в адресе разрешено");
  isTrue("üñîçøðé@example.com", "Unicode символы в адресе разрешены");
  isTrue("üñîçøðé@üñîçøðé.com", "Unicode символы в домене разрешены");
  // isTrue("postbox@com.com", "Верхнеуровневый домен разрешен");
  isTrue(
    String("!#$%&'*+-/=?^_`{}|~@example.org"),
    "Специальные символы в адресе разрешены",
  );
  isTrue(
    "x@x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x23456789.x2",
    "Общая длина до 254 символов",
  );
});

describe("Validation helper невалидные email", () => {
  function isFalse(mail: string, name: string = "") {
    it(name, () => expect(ValidationHelper.isEmail(mail)).toBe(false));
  }

  isFalse("plainaddress", "Нет символы @ и домена");
  isFalse("#@%^%#$@#$@#.com", "Мусор");
  isFalse("@domain.com", "Нет имени (первой части email)");
  isFalse("JoeSmith<email@domain.com>", "html-теги запрещены");
  isFalse("email.domain.com", "Нет @");
  isFalse("email@domain@domain.com", "Два символа @");
  isFalse(".email@domain.com", "Точка в начала адреса запрещена");
  isFalse("email.@domain.com", "Точка в конца имени запрещена");
  isFalse("email..email@domain.com", "Множество точек");
  isFalse("email@domain.com (Joe Smith)", "Текст после адреса запрещен");
  isFalse("email@-domain.com", "Доменная часть не может начинаться с тире");
  isFalse("email@domain-.com", "Тире не может быть в конце доменной части");
  // isFalse("email@111.222.333.44444", "Невалидный формат IP адреса");
  isFalse(
    "123456789012345678901234567890123456789012345678901234567890@12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345678901234567890123456789012345678901234567890123456789.12345.iana.org",
    "Длина более 254 символов",
  );
  isFalse(
    "12345678901234567890123456789012345678901234567890123456789012345@iana.org",
    "Имя более 64 символов",
  );
  isFalse(
    "first.last@x234567890123456789012345678901234567890123456789012345678901234.iana.org",
    "Первая часть доменного имени не может быть более 63",
  );
});
