import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defaultTheme, OutlineButton } from "../..";

describe("OutlineButton", () => {
  it("should render with default props", () => {
    render(<OutlineButton>Lorem ipsum</OutlineButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle(`border-color: ${defaultTheme.accentColor}`);
    expect(screen.getByRole("button")).toHaveStyle(`color: ${defaultTheme.accentColor}`);
  });
});
