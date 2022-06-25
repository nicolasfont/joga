import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Paragraph } from "../..";

describe("Paragraph", () => {
  it("should render with default props", () => {
    render(<Paragraph>Lorem ipsum</Paragraph>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "line-height: var(--joga-line-height, line-height)"
    );
  });
});