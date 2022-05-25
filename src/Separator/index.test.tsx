import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "../Separator";

describe("Separator", () => {
  it("Should render with default props", () => {
    const container = render(<Separator />);
    expect(container.baseElement.children[0].children[0]).toHaveStyle(
      "border: 0.1px solid"
    );
  });

  it("Should render with size prop", () => {
    const container = render(<Separator size={1} />);
    expect(container.baseElement.children[0].children[0]).toHaveStyle(
      "border: 1px solid"
    );
  });
});
