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
  backgroundColor = theme.accentColor,
  border = theme.border,
  borderColor = backgroundColor,
  borderRadius = theme.borderRadius,
  color = theme.fontAccentColor,
  className,
  ...props
}: ButtonProps<C>) => (
  <Text
    as="button"
    type="button"
    backgroundColor={backgroundColor}
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
