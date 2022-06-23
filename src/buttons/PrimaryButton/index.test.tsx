import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PrimaryButton } from "../..";

describe("PrimaryButton", () => {
  it("should render with default props", () => {
    render(<PrimaryButton>Lorem ipsum</PrimaryButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
