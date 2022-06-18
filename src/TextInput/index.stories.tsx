import { ComponentMeta } from "@storybook/react";
import { TextInput } from "../TextInput";
import { useState } from "react";

export default {
  title: "TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default = () => <TextInput placeholder="A placeholder" />;

export const WithValue = () => <TextInput value="With value" />;

export const WithPadding = () => <TextInput placeholder="Type nice things" padding={8} />;

export const WithHooks = () => {
  const [value, setValue] = useState("");
  
  return <TextInput value={value} onChange={setValue} />;
};
