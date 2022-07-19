import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Text, TextProps, useTheme } from "../..";

export type ButtonProps<C extends ElementType> = TextProps<C> & {
  onClick?: () => void;
};

export const Button = <C extends ElementType>({
  padding = "m",
  weight = 500,
  border,
  borderColor = "transparent",
  borderRadius,
  color,
  className,
  ...props
}: ButtonProps<C>) => {
  const theme = useTheme();
  return (
    <Text
      as="button"
      type="button"
      border={border || theme.border}
      borderColor={borderColor || theme.colors.border}
      borderRadius={borderRadius || theme.borderRadius}
      padding={padding}
      weight={weight}
      color={color || theme.colors.foreground}
      className={cx(
        css`
          cursor: pointer;
        `,
        className
      )}
      {...props}
    />
  );
};
