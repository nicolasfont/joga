import { ComponentMeta } from "@storybook/react";
import { ThemeOrangeDark } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/ThemeOrangeDark",
  component: ThemeOrangeDark,
} as ComponentMeta<typeof ThemeOrangeDark>;

export const Default = () => (
  <ThemeOrangeDark>
    <ExampleForm />
  </ThemeOrangeDark>
);
