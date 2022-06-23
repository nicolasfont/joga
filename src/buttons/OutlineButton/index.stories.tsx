import { ComponentMeta } from "@storybook/react";
import { OutlineButton } from "../..";

export default {
  title: "Buttons/OutlineButton",
  component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;

export const Default = () => <OutlineButton>Click Me</OutlineButton>;
