import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Reset } from "../Reset";

describe("Reset", () => {
  it("should reset body and #root", () => {
    render(
      <div id="root">
        <Reset>test children</Reset>
      </div>
    );
    expect(screen.getByText("test children")).toBeInTheDocument();
    expectElementToHaveResetStyles(document.querySelector("body"));
    expectElementToHaveResetStyles(document.querySelector("#root"));
  });

  it("should reset given targets", () => {
    render(
      <div className="main">
        <Reset targets={["body", ".main"]}>test children</Reset>
      </div>
    );
    expect(screen.getByText("test children")).toBeInTheDocument();
    expectElementToHaveResetStyles(document.querySelector("body"));
    expectElementToHaveResetStyles(document.querySelector(".main"));
  });
});

const expectElementToHaveResetStyles = (element: Element | null) => {
  expect(element).toHaveStyle("box-sizing: border-box");
  expect(element).toHaveStyle("display: flex");
  expect(element).toHaveStyle("flex: 1");
  expect(element).toHaveStyle("height: 100vh");
  expect(element).toHaveStyle("margin: 0");
};
