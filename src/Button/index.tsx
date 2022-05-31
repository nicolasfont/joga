import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps } from "../Text";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  className,
  children,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    padding={8}
    weight={500}
    className={cx(
      css`
        background-color: #000;
        border: 0;
        border-radius: 4px;
        color: white;
        cursor: pointer;
      `,
      className
    )}
    {...props}
  >
    {children}
  </Text>
);
