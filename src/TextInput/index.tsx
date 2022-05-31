import { ChangeEvent, ElementType, ForwardedRef, forwardRef } from "react";
import { Box, BoxProps } from "../Box";

export type TextInputProps<C extends ElementType> = BoxProps<C> & {
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = forwardRef(
  <C extends ElementType>(
    { onChange = () => {}, ...props }: TextInputProps<C>,
    ref: ForwardedRef<C>
  ) => (
    <Box
      {...props}
      as="input"
      type="text"
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      ref={ref}
    />
  )
);
