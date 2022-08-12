import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Stack, StackProps, useTheme } from "../..";

export type TextInputProps<C extends ElementType> = StackProps<C> & {
  caretColor?: string;
  focusedBorderColor?: string;
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = <C extends ElementType>({
  theme = useTheme(),
  border = theme.border,
  borderColor = theme.borderColor,
  borderRadius = theme.borderRadius,
  color = theme.fontColor,
  caretColor = color,
  className,
  focusedBorderColor = theme.accentColor,
  onChange,
  padding = "m",
  ...props
}: TextInputProps<C>) => (
  <Stack
    component="input"
    type="text"
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    color={color}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
    }}
    padding={padding}
    className={cx(
      css`
        ::placeholder {
          color: ${borderColor};
          opacity: 1;
        }
        &:focus {
          border-color: ${focusedBorderColor};
        }
        outline: none;
        caret-color: ${caretColor};
      `,
      className
    )}
    {...props}
  />
);
