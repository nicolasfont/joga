import { ComponentMeta } from "@storybook/react";
import { ThemeDark } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/ThemeDark",
  component: ThemeDark,
} as ComponentMeta<typeof ThemeDark>;

export const Default = () => (
  <ThemeDark>
    <ExampleForm />
  </ThemeDark>
);
