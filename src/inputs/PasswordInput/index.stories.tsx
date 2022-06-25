import { ComponentMeta } from "@storybook/react";
import { PasswordInput } from "../..";

export default {
  title: "Inputs/PasswordInput",
  component: PasswordInput,
} as ComponentMeta<typeof PasswordInput>;

export const Default = () => <PasswordInput placeholder="A placeholder" />;
