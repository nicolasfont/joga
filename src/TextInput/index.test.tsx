import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextInput } from "../TextInput";

describe("TextInput", () => {
  afterEach(() => {
    cleanup();
  });

  it("should render with default props", () => {
    render(<TextInput placeholder="Lorem ipsum" />);

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
  });

  it("should render with className", () => {
    render(<TextInput className="test-class" placeholder="Lorem ipsum" />);

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Lorem ipsum")).toHaveClass(
      "test-class"
    );
  });

  it("should call onChange when changed", async () => {
    const onChange = jest.fn();

    render(<TextInput onChange={onChange} placeholder="Lorem ipsum" />);

    fireEvent.change(screen.getByPlaceholderText("Lorem ipsum"), {
      target: { value: "a" },
    });

    expect(screen.getByPlaceholderText("Lorem ipsum")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.lastCall[0].target.value).toEqual("a");
  });

  it("should render with value", async () => {
    const onChange = jest.fn();

    render(<TextInput value="a" onChange={onChange} />);

    expect(screen.getByDisplayValue("a")).toBeInTheDocument();
  });
});
