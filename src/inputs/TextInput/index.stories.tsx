import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { TextInput } from "../..";

export default {
  title: "Inputs/TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default = () => <TextInput placeholder="A placeholder" />;

export const WithValue = () => <TextInput value="With value" />;

export const WithHooks = () => {
  const [value, setValue] = useState("");

  return <TextInput value={value} onChange={setValue} />;
};
