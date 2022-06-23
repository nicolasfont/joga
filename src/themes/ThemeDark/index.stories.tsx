import { ComponentMeta } from "@storybook/react";
import { ExampleForm, ThemeDark } from "../..";

export default {
  title: "Themes/ThemeDark",
  component: ThemeDark,
} as ComponentMeta<typeof ThemeDark>;

export const Default = () => (
  <ThemeDark>
    <ExampleForm />
  </ThemeDark>
);
