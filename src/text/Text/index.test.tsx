import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from "../..";

describe("Text", () => {
  it("should render with default props", () => {
    render(<Text>Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: inline-flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      'font-family: "Helvetica Neue",Helvetica,Arial,sans-serif'
    );
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-size: 1rem");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-weight: 400");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("line-height: 1");
  });

  it("should render with className", () => {
    render(<Text className="test-class">Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });

  it("should render with family", () => {
    render(<Text fontFamily="Test">Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-family: Test");
  });

  it("should render with lineHeight", () => {
    render(<Text lineHeight="2">Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("line-height: 2");
  });

  it("should render with size", () => {
    render(<Text fontSize={2}>Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-size: 2rem");
  });

  it("should render with weight", () => {
    render(<Text fontWeight={500}>Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("font-weight: 500");
  });

  it("should render with color", () => {
    render(<Text color="#fff">Lorem ipsum</Text>);

    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("color: #fff");
  });
});
