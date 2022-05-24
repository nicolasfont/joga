import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "../Separator";

describe("Separator", () => {
  it("Should render with default props", () => {
    render(<Separator />);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("border: 0.1px solid");
  });

  it("Should render with size prop", () => {
    render(<Separator size={1} />);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("border: 1px solid");
  });
});
