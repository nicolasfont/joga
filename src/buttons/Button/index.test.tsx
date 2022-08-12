import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button, defaultTheme } from "../..";

describe("Button", () => {
  it("should render with default props", () => {
    render(<Button>Lorem ipsum</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveStyle(
      "background-color: transparent"
    );
    expect(screen.getByRole("button")).toHaveStyle(
      `border: ${defaultTheme.border}`
    );
    expect(screen.getByRole("button")).toHaveStyle("border-color: transparent");
    expect(screen.getByRole("button")).toHaveStyle(
      `border-radius: ${defaultTheme.borderRadius}`
    );
    expect(screen.getByRole("button")).toHaveStyle(
      `color: ${defaultTheme.fontColor}`
    );
    expect(screen.getByRole("button")).toHaveStyle("font-weight: 500");
    expect(screen.getByRole("button")).toHaveStyle(
      `padding: ${defaultTheme.spacings.m}`
    );
  });

  it("should render with className", () => {
    render(<Button className="test-class">Lorem ipsum</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveClass("test-class");
  });

  it("should call onClick when clicked", () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Lorem ipsum</Button>);

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(onClick).toHaveBeenCalled();
  });
});
