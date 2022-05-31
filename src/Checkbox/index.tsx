import { ChangeEvent, ElementType, ForwardedRef, forwardRef } from "react";
import { Box, BoxProps } from "../Box";

export type CheckboxProps<C extends ElementType> = BoxProps<C> & {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const Checkbox = forwardRef(
  <C extends ElementType>(
    { onChange = () => {}, ...props }: CheckboxProps<C>,
    ref: ForwardedRef<C>
  ) => (
    <Box
      {...props}
      as="input"
      type="checkbox"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
      }}
      ref={ref}
    />
  )
);
