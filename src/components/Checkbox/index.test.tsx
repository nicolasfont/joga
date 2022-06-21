import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
  it("should render with default props", () => {
    render(<Checkbox />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should render checked", () => {
    render(<Checkbox checked={true} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("should render unchecked", () => {
    render(<Checkbox checked={false} />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });

  it("should render with className", () => {
    render(<Checkbox className="test-class" />);

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByRole("checkbox")).toHaveClass("test-class");
  });

  it("should call onChange when changed", async () => {
    const onChange = jest.fn();

    render(<Checkbox onChange={onChange} />);

    fireEvent.click(screen.getByRole("checkbox"));

    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.lastCall[0]).toEqual(true);
  });
});
