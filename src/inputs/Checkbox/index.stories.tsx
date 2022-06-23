import { ComponentMeta } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "../..";

export default {
  title: "Inputs/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

export const Default = () => <Checkbox />;

export const Checked = () => <Checkbox checked />;

export const Unchecked = () => <Checkbox checked={false} />;

export const WithHooks = () => {
  const [checked, setChecked] = useState(false);

  return <Checkbox checked={checked} onChange={setChecked} />;
};
