import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { PasswordInput } from "../..";

describe("PasswordInput", () => {
  it("should render with default props", () => {
    render(<PasswordInput placeholder="Lorem ipsum" />);

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<PasswordInput className="test-class" placeholder="Lorem ipsum" />);

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Lorem ipsum")).toHaveClass(
      "test-class"
    );
  });

  it("should call onChange when changed", async () => {
    const onChange = jest.fn();

    render(<PasswordInput onChange={onChange} placeholder="Lorem ipsum" />);

    fireEvent.change(screen.getByPlaceholderText("Lorem ipsum"), {
      target: { value: "a" },
    });

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.lastCall[0]).toEqual("a");
  });

  it("should render with value", async () => {
    const onChange = jest.fn();

    render(<PasswordInput value="a" onChange={onChange} />);

    expect(screen.getByDisplayValue("a")).toBeInTheDocument();
  });
});
