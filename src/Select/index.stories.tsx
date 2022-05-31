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
    onChange={(value: number) => {
      console.log(value);
    }}
  />
);

export const WithNumberValues = () => (
  <Select
    placeholder="How many?"
    options={[
      {
        label: "1",
        value: 1,
      },
      {
        label: "2",
        value: 2,
      },
      {
        label: "3",
        value: 3,
      },
    ]}
    onChange={(value: number) => {
      console.log(value);
    }}
  />
);

export const WithStringValues = () => (
  <Select
    placeholder="What color?"
    options={[
      {
        label: "Red",
        value: "red",
      },
      {
        label: "Green",
        value: "green",
      },
      {
        label: "Blue",
        value: "blue",
      },
    ]}
    onChange={(value: string) => {
      console.log(value);
    }}
  />
);

export const WithBooleanValues = () => (
  <Select
    placeholder="Is it it?"
    options={[
      {
        label: "Yes",
        value: true,
      },
      {
        label: "No",
        value: false,
      },
    ]}
    onChange={(value: boolean) => {
      console.log(value);
    }}
  />
);

export const WithObjectValues = () => (
  <Select
    placeholder="Who?"
    options={[
      {
        label: "Jack",
        value: { name: "Jack" },
      },
      {
        label: "Jane",
        value: { name: "Jane" },
      },
      {
        label: "John",
        value: { name: "John" },
      },
    ]}
    onChange={(value: { name: string }) => {
      console.log(value);
    }}
  />
);
