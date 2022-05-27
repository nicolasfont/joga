import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Grid } from "../Grid";
import { Text } from "../Text";

describe("Grid", () => {
  it("Should render with default props", () => {
    render(<Grid>Lorem ipsum</Grid>);
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("display: grid");
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
      `grid-template-areas: "header header" "side main" "footer footer"`
    );
  });
});
