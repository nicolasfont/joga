import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Box } from "../Box";

describe("Box", () => {
  it("Should render with default props", () => {
    render(<Box>Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
  });

  it("Should render with className", () => {
    render(<Box className="test-class">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });

  it("Should render with direction row", () => {
    render(<Box direction="row">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex-direction: row");
  });

  it("Should render with direction column", () => {
    render(<Box direction="column">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "flex-direction: column"
    );
  });

  it("Should render with align center", () => {
    render(<Box align="center">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: center");
  });

  it("Should render with align start", () => {
    render(<Box align="start">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: start");
  });

  it("Should render with align end", () => {
    render(<Box align="end">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: end");
  });

  it("Should render with justify center", () => {
    render(<Box justify="center">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: center"
    );
  });

  it("Should render with justify start", () => {
    render(<Box justify="start">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: start"
    );
  });

  it("Should render with justify end", () => {
    render(<Box justify="end">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("justify-content: end");
  });

  it("Should render with justify space-around", () => {
    render(<Box justify="space-around">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-around"
    );
  });

  it("Should render with justify space-between", () => {
    render(<Box justify="space-between">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-between"
    );
  });

  it("Should render with justify space-evenly", () => {
    render(<Box justify="space-evenly">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-evenly"
    );
  });

  it("Should render with flex 1", () => {
    render(<Box flex="1">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex: 1");
  });

  it("Should render with gap", () => {
    render(<Box gap={8}>Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("gap: 8px");
  });

  it("Should render with padding", () => {
    render(<Box padding={8}>Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("padding: 8px");
  });
});
