import { ComponentMeta } from "@storybook/react";
import { Button } from "../Button";
import { createStory } from "../createStory";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = createStory(Button);
Primary.args = {
  children: "Button",
};
