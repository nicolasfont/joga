import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Stack, StackProps } from "../..";
import { jogaVar } from "../../utils";

export type TextInputProps<C extends ElementType> = StackProps<C> & {
  caretColor?: string;
  focusedBorderColor?: string;
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = <C extends ElementType>({
  border = "default-border",
  borderColor = "default-color-2",
  borderRadius = "default-border-radius",
  color = "default-color-1",
  caretColor = "default-color-1",
  className,
  focusedBorderColor = "primary-color-0",
  onChange = () => {},
  padding = "default-input-padding",
  ...props
}: TextInputProps<C>) => (
  <Stack
    as="input"
    type="text"
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    color={color}
    onChange={(e: ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    }}
    padding={padding}
    className={cx(
      css`
        ::placeholder {
          color: ${jogaVar(borderColor)};
          opacity: 1;
        }
        &:focus {
          border-color: ${jogaVar(focusedBorderColor)};
        }
        outline: none;
        caret-color: ${jogaVar(caretColor)};
      `,
      className
    )}
    {...props}
  />
);
