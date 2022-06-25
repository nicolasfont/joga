import { ChangeEvent, ElementType } from "react";
import { Box, BoxProps } from "../..";
import { hash } from "./hash";

export type SelectProps<C extends ElementType> = BoxProps<C> & {
  value?: any;
  onChange?: (value?: any) => void;
  options?: { label: string; value: any }[];
  placeholder?: string;
};

export const Select = <C extends ElementType>({
  border = "default-border",
  borderColor = "default-color-2",
  borderRadius = "default-border-radius",
  onChange = () => {},
  value,
  options = [],
  padding = "default-input-padding",
  placeholder,
  ...props
}: SelectProps<C>) => (
  <Box
    as="select"
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
      onChange(options[e.target.selectedIndex + (placeholder ? -1 : 0)]?.value);
    }}
    padding={padding}
    value={value === undefined ? undefined : hash(value)}
    {...props}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((option: { label: string; value: any }) => {
      const key = hash(option.value);
      return (
        <option key={key} value={key}>
          {option.label}
        </option>
      );
    })}
  </Box>
);
