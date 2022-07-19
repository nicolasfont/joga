import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Stack, StackProps, useTheme } from "../..";
import { hash } from "./hash";

export type SelectProps<C extends ElementType> = StackProps<C> & {
  value?: any;
  onChange?: (value?: any) => void;
  options?: { label: string; value: any }[];
  placeholder?: string;
};

export const Select = <C extends ElementType>({
  border,
  borderColor,
  borderRadius,
  className,
  onChange = () => {},
  value,
  options = [],
  padding = "m",
  placeholder,
  ...props
}: SelectProps<C>) => {
  const theme = useTheme();
  return (
    <Stack
      as="select"
      className={cx(
        css`
          cursor: pointer;
        `,
        className
      )}
      border={border || theme.border}
      borderColor={borderColor || theme.colors.border}
      borderRadius={borderRadius || theme.borderRadius}
      onChange={(e: ChangeEvent<HTMLSelectElement>) => {
        onChange(
          options[e.target.selectedIndex + (placeholder ? -1 : 0)]?.value
        );
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
    </Stack>
  );
};
