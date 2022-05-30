import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Stack } from "../Stack";

describe("Stack", () => {
  it("should render with default props", () => {
    render(<Stack>Lorem ipsum</Stack>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle(
      "flex-direction: column"
    );
  });
});
