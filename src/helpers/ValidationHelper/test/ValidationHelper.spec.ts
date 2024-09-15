import { ValidationHelper } from "../ValidationHelper";

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
