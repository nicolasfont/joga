import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Select } from "../Select";
import { hash } from "../utils";

jest.mock("../utils");

jest.mocked(hash).mockImplementation((value: {}) => String(value));

describe("Select", () => {
  it("should render with default props", () => {
    render(<Select />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should render with options", () => {
    render(
      <Select
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole<HTMLOptionElement>("option", {
      hidden: true,
    });
    expect(options).toHaveLength(2);
    expect(options[0].label).toEqual("Option 1");
    expect(options[0].value).toEqual("1");
    expect(options[1].label).toEqual("Option 2");
    expect(options[1].value).toEqual("2");
  });

  it("should render with options and value", () => {
    render(
      <Select
        value={2}
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole<HTMLOptionElement>("option", {
      hidden: true,
    });
    expect(options).toHaveLength(2);
    expect(options[0].label).toEqual("Option 1");
    expect(options[0].value).toEqual("1");
    expect(options[1].label).toEqual("Option 2");
    expect(options[1].value).toEqual("2");
    expect(options[1].selected).toBe(true);
  });

  it("should render with placeholder", () => {
    render(<Select placeholder="Select something" />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole<HTMLOptionElement>("option", {
      hidden: true,
    });
    expect(options).toHaveLength(1);
    expect(options[0].label).toEqual("Select something");
    expect(options[0].value).toEqual("");
    expect(options[0].selected).toBe(true);
  });

  it("should render with placeholder and options", () => {
    render(
      <Select
        placeholder="Select something"
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole<HTMLOptionElement>("option", {
      hidden: true,
    });
    expect(options).toHaveLength(3);
    expect(options[0].label).toEqual("Select something");
    expect(options[0].value).toEqual("");
    expect(options[0].selected).toBe(true);
    expect(options[1].label).toEqual("Option 1");
    expect(options[1].value).toEqual("1");
    expect(options[2].label).toEqual("Option 2");
    expect(options[2].value).toEqual("2");
  });

  it("should render with placeholder, options and value", () => {
    render(
      <Select
        placeholder="Select something"
        value={2}
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
      />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    const options = screen.getAllByRole<HTMLOptionElement>("option", {
      hidden: true,
    });
    expect(options).toHaveLength(3);
    expect(options[0].label).toEqual("Select something");
    expect(options[0].value).toEqual("");
    expect(options[1].label).toEqual("Option 1");
    expect(options[1].value).toEqual("1");
    expect(options[2].label).toEqual("Option 2");
    expect(options[2].value).toEqual("2");
    expect(options[2].selected).toBe(true);
  });

  it("should render with className", () => {
    render(<Select className="test-class" />);

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("combobox")).toHaveClass("test-class");
  });

  it("should call onChange when changed", async () => {
    const onChange = jest.fn();

    render(
      <Select
        onChange={onChange}
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
        ]}
      />
    );

    await userEvent.selectOptions(
      screen.getByRole("combobox"),
      screen.getByRole("option", {
        name: "Option 2",
      })
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.lastCall[0]).toEqual(2);
  });
});
