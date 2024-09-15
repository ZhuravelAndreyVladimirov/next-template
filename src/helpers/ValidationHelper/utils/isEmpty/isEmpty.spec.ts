import { isEmptyFunc } from "./isEmpty";

describe("Checking for an empty value", () => {
  it("Checking the value of a string", () =>
    expect(isEmptyFunc("string")).toBe(false));

  it("Checking the value of a number", () =>
    expect(isEmptyFunc(5)).toBe(false));

  it("Checking the value of an empty string", () =>
    expect(isEmptyFunc("")).toBe(true));

  it("Checking the null value", () => expect(isEmptyFunc(null)).toBe(true));

  it("Checking the undefined value", () =>
    expect(isEmptyFunc(undefined)).toBe(true));
});
