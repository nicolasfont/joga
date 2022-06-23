import { jogaVar } from "../..";

describe("jogaVar", () => {
  it("should return undefined when value is undefined", () => {
    expect(jogaVar(undefined)).toBeUndefined();
  });

  it("should return joga var when value is a valid identifier", () => {
    expect(jogaVar("red")).toEqual("var(--joga-red, red)");
  });

  it("should return joga var when value is a valid identifier with dashes and numbers", () => {
    expect(jogaVar("primary-color-2")).toEqual(
      "var(--joga-primary-color-2, primary-color-2)"
    );
  });

  it("should return value when value is not a valid identifier", () => {
    expect(jogaVar("#333")).toEqual("#333");
  });
});
