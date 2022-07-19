import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps, useTheme } from "../..";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  theme = useTheme(),
  padding = "m",
  weight = 500,
  border = theme.border,
  borderColor = "transparent",
  borderRadius = theme.borderRadius,
  color = theme.colors.foreground,
  className,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    border={border}
    borderColor={borderColor}
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
