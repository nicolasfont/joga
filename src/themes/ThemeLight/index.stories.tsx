import { ComponentMeta } from "@storybook/react";
import { ExampleForm, ThemeLight } from "../..";

export default {
  title: "Themes/ThemeLight",
  component: ThemeLight,
} as ComponentMeta<typeof ThemeLight>;

export const Default = () => (
  <ThemeLight>
    <ExampleForm />
  </ThemeLight>
);
