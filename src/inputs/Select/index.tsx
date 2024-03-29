import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Stack, StackProps, useTheme } from "../..";
import { hash } from "./hash";

export type SelectProps<C extends ElementType, T> = StackProps<C> & {
  value?: T;
  onChange?: (value?: T) => void;
  options?: { label: string; value: T }[];
  placeholder?: string;
};

export const Select = <C extends ElementType, T>({
  theme = useTheme(),
  border = theme.border,
  borderColor = theme.borderColor,
  borderRadius = theme.borderRadius,
  className,
  onChange,
  value,
  options = [],
  padding = "m",
  placeholder,
  ...props
}: SelectProps<C, T>) => (
  <Stack
    component="select"
    className={cx(
      css`
        cursor: pointer;
      `,
      className
    )}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    onChange={(e: ChangeEvent<HTMLSelectElement>) => {
      onChange?.(
        options[e.target.selectedIndex + (placeholder ? -1 : 0)]?.value
      );
    }}
    padding={padding}
    value={value === undefined ? undefined : hash(value)}
    {...props}
  >
    {placeholder && <option value="">{placeholder}</option>}
    {options.map((option: { label: string; value: T }) => {
      const key = hash(option.value);
      return (
        <option key={key} value={key}>
          {option.label}
        </option>
      );
    })}
  </Stack>
);
