import { ComponentMeta } from "@storybook/react";
import { Checkbox } from "../Checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox />;

export const Checked = () => <Checkbox checked />;

export const Unchecked = () => <Checkbox checked={false} />;
