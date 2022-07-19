import { ComponentMeta } from "@storybook/react";
import { Theme } from "../..";
import { ExampleForm } from "../../examples/ExampleForm/index.stories";

export default {
  title: "Themes/Theme",
  component: Theme,
} as ComponentMeta<typeof Theme>;

export const Default = () => (
  <Theme>
    <ExampleForm />
  </Theme>
);
