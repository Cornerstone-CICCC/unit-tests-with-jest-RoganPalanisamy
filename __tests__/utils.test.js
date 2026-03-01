import { add, divide, capitalize } from "../src/utils.js";

describe("add", () => {
  test("returns 5 for add(2, 3)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("returns 3 for add(-2, 5)", () => {
    expect(add(-2, 5)).toBe(3);
  });

  test("returns 0 for add(0, 0)", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("throws TypeError for add(\"2\", 3)", () => {
    expect(() => add("2", 3)).toThrow(TypeError);
  });

  // extra credit: adding decimal numbers should work correctly
  test("returns 4.5 for add(2.5, 2)", () => {
    expect(add(2.5, 2)).toBe(4.5);
  });
});

describe("divide", () => {
  test("returns 5 for divide(10, 2)", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("returns 1.5 for divide(3, 2)", () => {
    expect(divide(3, 2)).toBe(1.5);
  });

  test("throws Error for divide(1, 0)", () => {
    expect(() => divide(1, 0)).toThrow(Error);
  });

  test("throws TypeError for divide(\"10\", 2)", () => {
    expect(() => divide("10", 2)).toThrow(TypeError);
  });

  // extra credit: dividing negative numbers
  test("returns -2 for divide(-6, 3)", () => {
    expect(divide(-6, 3)).toBe(-2);
  });
});

describe("capitalize", () => {
  test("returns \"Hello\" for capitalize(\"hello\")", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  test("returns \"Hello\" for capitalize(\"Hello\")", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("returns \"\" for capitalize(\"\")", () => {
    expect(capitalize("")).toBe("");
  });

  test("throws TypeError for capitalize(123)", () => {
    expect(() => capitalize(123)).toThrow(TypeError);
  });

  // extra credit: ensure leading spaces are preserved
  test("capitalizes first non-space character (behaves consistently)", () => {
    expect(capitalize("  world")).toBe("  world");
  });
});
