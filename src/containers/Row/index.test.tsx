import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Row } from "../..";

describe("Row", () => {
  it("should render with default props", () => {
    render(<Row>Lorem ipsum</Row>);
    expect(screen.getByText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByText("Lorem ipsum")).toHaveStyle("flex-direction: row");
  });
});
