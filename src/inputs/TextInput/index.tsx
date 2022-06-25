import { css, cx } from "@emotion/css";
import { ChangeEvent, ElementType } from "react";
import { Box, BoxProps } from "../..";
import { jogaVar } from "../../utils";

export type TextInputProps<C extends ElementType> = BoxProps<C> & {
  onChange?: (text: string) => void;
  placeholder?: string;
  value?: string;
};

export const TextInput = <C extends ElementType>({
  border = "default-border",
  borderColor = "default-color-2",
  borderRadius = "default-border-radius",
  className,
  onChange = () => {},
  padding = "default-input-padding",
  ...props
}: TextInputProps<C>) => (
  <Box
    as="input"
    type="text"
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
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
      `,
      className
    )}
    {...props}
  />
);
