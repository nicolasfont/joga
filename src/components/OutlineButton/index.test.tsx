import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { OutlineButton } from "../OutlineButton";

describe("OutlineButton", () => {
  it("should render with default props", () => {
    render(<OutlineButton>Lorem ipsum</OutlineButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
