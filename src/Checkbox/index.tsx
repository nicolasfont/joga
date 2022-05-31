import { ChangeEvent, ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type CheckboxProps<C extends ElementType> = BoxProps<C> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = <C extends ElementType>({
  onChange = () => {},
  ...props
}: CheckboxProps<C>) => (
  <Box
    as="input"
    type="checkbox"
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.checked);
    }}
    {...props}
  />
);
