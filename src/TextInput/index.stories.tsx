import { ComponentMeta } from "@storybook/react";
import { TextInput } from "../TextInput";

export default {
  title: "TextInput",
  component: TextInput,
} as ComponentMeta<typeof TextInput>;

export const Default = () => <TextInput placeholder="A placeholder" />;

export const WithValue = () => <TextInput value="With value" />;
