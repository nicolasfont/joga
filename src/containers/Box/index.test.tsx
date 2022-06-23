import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Box } from "../..";

describe("Box", () => {
  it("should render with default props", () => {
    render(<Box>Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
  });

  it("should render with className", () => {
    render(<Box className="test-class">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });

  it("should render with direction row", () => {
    render(<Box direction="row">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex-direction: row");
  });

  it("should render with direction column", () => {
    render(<Box direction="column">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "flex-direction: column"
    );
  });

  it("should render with align center", () => {
    render(<Box align="center">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: center");
  });

  it("should render with align start", () => {
    render(<Box align="start">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: start");
  });

  it("should render with align end", () => {
    render(<Box align="end">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: end");
  });

  it("should render with align stretch", () => {
    render(<Box align="stretch">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: stretch");
  });

  it("should render with justify center", () => {
    render(<Box justify="center">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: center"
    );
  });

  it("should render with justify start", () => {
    render(<Box justify="start">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: start"
    );
  });

  it("should render with justify end", () => {
    render(<Box justify="end">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("justify-content: end");
  });

  it("should render with justify space-around", () => {
    render(<Box justify="space-around">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-around"
    );
  });

  it("should render with justify space-between", () => {
    render(<Box justify="space-between">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-between"
    );
  });

  it("should render with justify space-evenly", () => {
    render(<Box justify="space-evenly">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-evenly"
    );
  });

  it("should render with justify stretch", () => {
    render(<Box justify="stretch">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: stretch"
    );
  });

  it("should render with flex 1", () => {
    render(<Box flex="1">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex: 1");
  });

  it("should render with gap", () => {
    render(<Box gap="m">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "gap: var(--joga-m, m)"
    );
  });

  it("should render with gap in pixels", () => {
    render(<Box gap="8px">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "gap: var(--joga-8px, 8px)"
    );
  });

  it("should render with padding", () => {
    render(<Box padding="m">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "padding: var(--joga-m, m)"
    );
  });

  it("should render with padding in pixels", () => {
    render(<Box padding="12px">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "padding: var(--joga-12px, 12px)"
    );
  });

  it("should render with border", () => {
    render(<Box border="1px solid">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("border: 1px solid");
  });

  it("should render with area", () => {
    render(<Box area="header">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("grid-area: header");
  });

  it("should render with backgroundColor", () => {
    render(<Box backgroundColor="#333">Lorem ipsum</Box>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "background-color: #333"
    );
  });

  it("should render as anchor", () => {
    render(
      <Box as="a" href="https://jogajs.com">
        Lorem ipsum
      </Box>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Lorem ipsum");
    expect(screen.getByRole("link")).toHaveStyle("display: flex");
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "https://jogajs.com"
    );
  });
});
