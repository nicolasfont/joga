import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { Box, BoxProps } from "../Box";

export type TextProps<C extends ElementType> = BoxProps<C> & {
  family?: string;
  lineHeight?: number;
  /**
   * Size in rems
   */
  size?: number;
  weight?: number;
};

export const Text = <C extends ElementType>({
  className,
  family = '"Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight = 1.6,
  size = 1,
  weight = 400,
  ...props
}: TextProps<C>) => (
  <Box
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
