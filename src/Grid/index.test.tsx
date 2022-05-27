import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Grid } from "../Grid";
import { Text } from "../Text";
import { Box } from "../Box";

describe("Grid", () => {
  it("Should render with default props", () => {
    render(<Grid>Lorem ipsum</Grid>);
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: grid");
  });

  it("Should render with className", () => {
    render(<Grid className="test-class">Lorem ipsum</Grid>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: grid");
    expect(screen.getByText("Lorem ipsum")).toHaveClass("test-class");
  });

  it("Should render with columns", () => {
    render(
      <Grid columns="auto 1fr auto">
        <Text>Lorem</Text>
        <Text>ipsum</Text>
        <Text>dolor</Text>
      </Grid>
    );
    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByText("ipsum")).toBeInTheDocument();
    expect(screen.getByText("dolor")).toBeInTheDocument();
    expect(screen.getByText("Lorem").parentNode).toHaveStyle("display: grid");
    expect(screen.getByText("Lorem").parentNode).toHaveStyle(
      "grid-template-columns: auto 1fr auto"
    );
  });

  it("Should render with rows", () => {
    render(
      <Grid rows="auto 1fr auto">
        <Text>Lorem</Text>
        <Text>ipsum</Text>
        <Text>dolor</Text>
      </Grid>
    );
    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByText("ipsum")).toBeInTheDocument();
    expect(screen.getByText("dolor")).toBeInTheDocument();
    expect(screen.getByText("Lorem").parentNode).toHaveStyle("display: grid");
    expect(screen.getByText("Lorem").parentNode).toHaveStyle(
      "grid-template-rows: auto 1fr auto"
    );
  });

  it("Should render with areas", () => {
    render(
      <Grid
        areas={`
          "header header"
          "side main"
          "footer footer"
        `}
      >
        <Box area="header">
          <Text>Lorem</Text>
        </Box>
        <Box area="side">
          <Text>ipsum</Text>
        </Box>
        <Box area="main">
          <Text>dolor</Text>
        </Box>
        <Box area="footer">
          <Text>sit</Text>
        </Box>
      </Grid>
    );
    expect(screen.getByText("Lorem")).toBeInTheDocument();
    expect(screen.getByText("ipsum")).toBeInTheDocument();
    expect(screen.getByText("dolor")).toBeInTheDocument();
    expect(screen.getByText("sit")).toBeInTheDocument();
    expect(screen.getByText("Lorem").parentNode?.parentNode).toHaveStyle(
      "display: grid"
    );
    expect(screen.getByText("Lorem").parentNode?.parentNode).toHaveStyle(
      `grid-template-areas: "header header" "side main" "footer footer"`
    );
  });
});
