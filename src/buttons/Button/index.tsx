import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps, useTheme } from "../..";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  theme = useTheme(),
  backgroundColor = "transparent",
  border = theme.border,
  borderColor = "transparent",
  borderRadius = theme.borderRadius,
  className,
  color = theme.fontColor,
  fontWeight = 500,
  padding = "m",
  ...props
}: ButtonProps<C>) => (
  <Text
    component="button"
    type="button"
    backgroundColor={backgroundColor}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    padding={padding}
    fontWeight={fontWeight}
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
