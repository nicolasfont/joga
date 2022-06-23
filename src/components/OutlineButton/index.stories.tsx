import { ComponentMeta } from "@storybook/react";
import { OutlineButton } from "../OutlineButton";

export default {
  title: "OutlineButton",
  component: OutlineButton,
} as ComponentMeta<typeof OutlineButton>;

export const Default = () => <OutlineButton>Click Me</OutlineButton>;
