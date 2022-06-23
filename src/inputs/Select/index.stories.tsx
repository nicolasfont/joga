import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Select } from "../..";

export default {
  title: "Inputs/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

export const Default = () => (
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

export const WithValue = () => (
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

export const WithPlaceholder = () => (
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

export const WithPlaceholderAndValue = () => (
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

export const WithOnChange = () => (
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
    onChange={(value) => {
      console.log(value);
    }}
  />
);

export const WithHooks = () => {
  const [value, setValue] = useState();

  return (
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
      value={value}
      onChange={setValue}
    />
  );
};
