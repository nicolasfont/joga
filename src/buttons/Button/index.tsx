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
  justify = "center",
  padding = "s",
  ...props
}: ButtonProps<C>) => (
  <Text
    component="button"
    type="button"
    backgroundColor={backgroundColor}
    border={border}
    borderColor={borderColor}
    borderRadius={borderRadius}
    color={color}
    fontWeight={fontWeight}
    justify={justify}
    padding={padding}
    className={cx(
      css`
        cursor: pointer;
      `,
      className
    )}
    {...props}
  />
);
