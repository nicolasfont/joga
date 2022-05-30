import { ComponentMeta } from "@storybook/react";
import { Select } from "../Select";

export default {
  title: "Select",
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