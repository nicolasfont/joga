import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = "m",
  weight = 500,
  border = "0",
  color = "primary-color-1",
  backgroundColor = "primary-color-0",
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    border={border}
    padding={padding}
    weight={weight}
    color={color}
    backgroundColor={backgroundColor}
    className={cx(
      css`
        border-radius: 4px;
        cursor: pointer;
      `,
      className
    )}
    {...props}
  >
    {children}
  </Text>
);
