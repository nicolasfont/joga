import { ComponentMeta } from "@storybook/react";
import { Button } from "../..";

export default {
  title: "Buttons/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Click Me</Button>;
