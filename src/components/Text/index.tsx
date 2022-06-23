import { css, cx } from "@emotion/css";
import { ElementType } from "react";
import { jogaVar } from "../../utils";
import { Box, BoxProps } from "../Box";

export type TextProps<C extends ElementType> = BoxProps<C> & {
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
  className,
  color = "#333",
  family = '"Helvetica Neue", Helvetica, Arial, sans-serif',
  lineHeight = "1",
  size = 1,
  weight = 400,
  ...props
}: TextProps<C>) => (
  <Box
    as="span"
    color={color}
    className={cx(
      css`
        display: inline-flex;
        font-family: ${family};
        font-size: ${size}rem;
        font-weight: ${weight};
        line-height: ${jogaVar(lineHeight)};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `,
      className
    )}
    {...props}
  />
);
