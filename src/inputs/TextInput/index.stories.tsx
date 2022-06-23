import { ComponentMeta } from "@storybook/react";
import { TextInput } from "../..";
import { useState } from "react";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default = () => <TextInput placeholder="A placeholder" />;

export const WithValue = () => <TextInput value="With value" />;

export const WithPadding = () => (
  <TextInput placeholder="Type nice things" padding="m" />
);

export const WithHooks = () => {
  const [value, setValue] = useState("");

  return <TextInput value={value} onChange={setValue} />;
};
