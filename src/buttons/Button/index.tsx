import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../..";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = "m",
  weight = 500,
  border = "0",
  borderRadius = "default-border-radius",
  color = "default-color-1",
  className,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    border={border}
    borderRadius={borderRadius}
    padding={padding}
    weight={weight}
    color={color}
    className={cx(
      css`
        cursor: pointer;
      `,
      className
    )}
    {...props}
  />
);
