import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Stack, StackProps, useTheme } from "../..";

export type TextProps<C extends ElementType> = StackProps<C> & {
  color?: string;
  fontFamily?: string;
  lineHeight?: string;
  /**
   * Size in rems
   */
  fontSize?: number;
  fontWeight?: number;
};

export const Text = <C extends ElementType>({
  theme = useTheme(),
  className,
  lineHeight = "1",
  fontFamily = theme.fontFamily,
  fontSize = 1,
  fontWeight = 400,
  ...props
}: TextProps<C>) => (
  <Stack
    component="span"
    className={cx(
      css`
        display: inline-flex;
        font-family: ${fontFamily};
        font-size: ${fontSize}rem;
        font-weight: ${fontWeight};
        line-height: ${lineHeight};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,
      className
    )}
    {...props}
  />
);
