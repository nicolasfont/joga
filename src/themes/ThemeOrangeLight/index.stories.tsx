import { ComponentMeta } from "@storybook/react";
import { ThemeOrangeLight } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/ThemeOrangeLight",
  component: ThemeOrangeLight,
} as ComponentMeta<typeof ThemeOrangeLight>;

export const Default = () => (
  <ThemeOrangeLight>
    <ExampleForm />
  </ThemeOrangeLight>
);
