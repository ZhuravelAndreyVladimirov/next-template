import { StyleHelper } from "../StyleHelper";

describe("Merge class names in one string", () => {
  it("Concat all strings when no undefined classNames", () => {
    const merge = StyleHelper.merge("className1", "className2");

    expect(merge).toBe("className1 className2");
  });

  it("Returns one class name", () => {
    const merge = StyleHelper.merge(undefined, "className2");

    expect(merge).toBe("className2");
  });

  it("return empty string when all class names is undefined", () => {
    const merge = StyleHelper.merge(undefined, undefined);

    expect(merge).toBe("");
  });
});

describe("Add prefix to basic style name", () => {
  it("Concat to strings", () => {
    const concat = StyleHelper.addPrefix("prefixName__", "className");

    expect(concat).toBe("prefixName__className");
  });
});
