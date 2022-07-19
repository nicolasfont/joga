import { ComponentMeta } from "@storybook/react";
import { ThemeOrange } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/ThemeOrange",
  component: ThemeOrange,
} as ComponentMeta<typeof ThemeOrange>;

export const Default = () => (
  <ThemeOrange>
    <ExampleForm />
  </ThemeOrange>
);
