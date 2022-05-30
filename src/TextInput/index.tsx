import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type TextInputProps<C extends ElementType> = BoxProps<C> & {
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = <C extends ElementType>({
  onChange = () => {},
  ...props
}: TextInputProps<C>) => (
  <Box
    {...props}
    as="input"
    type="text"
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    }}
  />
);
