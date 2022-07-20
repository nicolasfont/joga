import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Stack, StackProps, useTheme } from "../..";

export type TextProps<C extends ElementType> = StackProps<C> & {
  color?: string;
  family?: string;
  lineHeight?: string;
  /**
   * Size in rems
   */
  size?: number;
  weight?: number;
};

export const Text = <C extends ElementType>({
  theme = useTheme(),
  className,
  family = theme.fontFamily,
  lineHeight = "1",
  size = 1,
  weight = 400,
  ...props
}: TextProps<C>) => (
  <Stack
    as="span"
    className={cx(
      css`
        display: inline-flex;
        font-family: ${family};
        font-size: ${size}rem;
        font-weight: ${weight};
        line-height: ${lineHeight};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,
      className
    )}
    {...props}
  />
);
