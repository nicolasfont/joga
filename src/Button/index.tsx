import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = 8,
  weight = 500,
  color = "#fff",
  backgroundColor = "#333",
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    padding={padding}
    weight={weight}
    color={color}
    backgroundColor={backgroundColor}
    className={cx(
      css`
        border: 0;
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
