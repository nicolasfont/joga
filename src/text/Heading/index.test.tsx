import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Heading } from "../..";

describe("Heading", () => {
  it("should render with default props", () => {
    render(<Heading>Lorem ipsum</Heading>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-weight: 600");
  });

  it("should render with className", () => {
    render(<Heading className="test-class">Lorem ipsum</Heading>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });
});
