import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Box, BoxProps } from "../Box";
import { hash } from "../utils";

export type SelectProps<C extends ElementType> = BoxProps<C> & {
  value?: any;
  onChange?: (value?: any) => void;
  options?: { label: string; value: any }[];
  placeholder?: string;
};

export const Select = <C extends ElementType>({
  onChange = () => {},
  value,
  options = [],
  placeholder,
  ...props
}: SelectProps<C>) => (
  <Box
    {...props}
    as="select"
    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
      onChange(options[e.target.selectedIndex + (placeholder ? -1 : 0)]?.value);
    }}
    value={value === undefined ? undefined : hash(value)}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((option) => {
      const key = hash(option.value);
      return (
        <option key={key} value={key}>
          {option.label}
        </option>
      );
    })}
  </Box>
);
