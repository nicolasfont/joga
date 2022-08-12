import { ChangeEvent, ElementType } from "react";
import { Stack, StackProps } from "../..";

export type CheckboxProps<C extends ElementType> = StackProps<C> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = <C extends ElementType>({
  onChange = () => {},
  ...props
}: CheckboxProps<C>) => (
  <Stack
    component="input"
    type="checkbox"
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    }}
    {...props}
  />
);
