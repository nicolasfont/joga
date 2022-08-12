import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { defaultTheme, SolidButton } from "../..";

describe("SolidButton", () => {
  it("should render with default props", () => {
    render(<SolidButton>Lorem ipsum</SolidButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle(`background-color: ${defaultTheme.accentColor}`);
    expect(screen.getByRole("button")).toHaveStyle(`border-color: ${defaultTheme.accentColor}`);
    expect(screen.getByRole("button")).toHaveStyle(`color: ${defaultTheme.fontAccentColor}`);
  });

  it("should render with same border and background color", () => {
    render(<SolidButton backgroundColor="yellow">Lorem ipsum</SolidButton>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle("background-color: yellow");
    expect(screen.getByRole("button")).toHaveStyle("border-color: yellow");
  });
});
