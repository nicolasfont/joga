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
  border,
  borderColor,
  borderRadius,
  color,
  caretColor,
  className,
  focusedBorderColor,
  onChange = () => {},
  padding = "m",
  ...props
}: TextInputProps<C>) => {
  const theme = useTheme();
  return (
    <Stack
      as="input"
      type="text"
      border={border || theme.border}
      borderColor={borderColor || theme.colors.border}
      borderRadius={borderRadius || theme.borderRadius}
      color={color || theme.colors.foreground}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      padding={padding}
      className={cx(
        css`
          ::placeholder {
            color: ${borderColor || theme.colors.border};
            opacity: 1;
          }
          &:focus {
            border-color: ${focusedBorderColor || theme.colors.accent};
          }
          outline: none;
          caret-color: ${color || theme.colors.foreground};
        `,
        className
      )}
      {...props}
    />
  );
};
