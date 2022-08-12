import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Stack } from "../..";

describe("Stack", () => {
  it("should render with default props", () => {
    render(<Stack>Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
  });

  it("should render with className", () => {
    render(<Stack className="test-class">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });

  it("should render with direction row", () => {
    render(<Stack direction="row">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex-direction: row");
  });

  it("should render with direction column", () => {
    render(<Stack direction="column">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "flex-direction: column"
    );
  });

  it("should render with align center", () => {
    render(<Stack align="center">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: center");
  });

  it("should render with align start", () => {
    render(<Stack align="start">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: start");
  });

  it("should render with align end", () => {
    render(<Stack align="end">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: end");
  });

  it("should render with align stretch", () => {
    render(<Stack align="stretch">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("align-items: stretch");
  });

  it("should render with justify center", () => {
    render(<Stack justify="center">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: center"
    );
  });

  it("should render with justify start", () => {
    render(<Stack justify="start">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: start"
    );
  });

  it("should render with justify end", () => {
    render(<Stack justify="end">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("justify-content: end");
  });

  it("should render with justify space-around", () => {
    render(<Stack justify="space-around">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-around"
    );
  });

  it("should render with justify space-between", () => {
    render(<Stack justify="space-between">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-between"
    );
  });

  it("should render with justify space-evenly", () => {
    render(<Stack justify="space-evenly">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: space-evenly"
    );
  });

  it("should render with justify stretch", () => {
    render(<Stack justify="stretch">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "justify-content: stretch"
    );
  });

  it("should render with flex 1", () => {
    render(<Stack flex="1">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex: 1");
  });

  it("should render with gap", () => {
    render(<Stack gap="m">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("gap: 8px");
  });

  it("should render with padding", () => {
    render(<Stack padding="m">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("padding: 8px");
  });

  it("should render with border", () => {
    render(<Stack border="1px solid">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("border: 1px solid");
  });

  it("should render with borderRadius", () => {
    render(<Stack borderRadius="8px">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("border-radius: 8px");
  });

  it("should render with area", () => {
    render(<Stack area="header">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("grid-area: header");
  });

  it("should render with backgroundColor", () => {
    render(<Stack backgroundColor="#333">Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: flex");
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "background-color: #333"
    );
  });

  it("should render as an anchor", () => {
    render(
      <Stack component="a" href="https://jogajs.com">
        Lorem ipsum
      </Stack>
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
