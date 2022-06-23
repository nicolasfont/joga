import { ComponentMeta } from "@storybook/react";
import { ThemeLight } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/ThemeLight",
  component: ThemeLight,
} as ComponentMeta<typeof ThemeLight>;

export const Default = () => (
  <ThemeLight>
    <ExampleForm />
  </ThemeLight>
);
