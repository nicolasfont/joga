import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "../..";

describe("Button", () => {
  it("should render with default props", () => {
    render(<Button>Lorem ipsum</Button>);

    expect(screen.getByRole("button")).toBeInTheDocument();
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
