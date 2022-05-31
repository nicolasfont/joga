import { css } from "@emotion/css";
import { ElementType, ForwardedRef, forwardRef } from "react";
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

export const Text = forwardRef(
  <C extends ElementType>(
    {
      className,
      family = '"Helvetica Neue", Helvetica, Arial, sans-serif',
      lineHeight = 1.6,
      size = 1,
      weight = 400,
      ...props
    }: TextProps<C>,
    ref: ForwardedRef<C>
  ) => (
    <Box
      {...props}
      as="span"
      classNames={[
        css`
          display: inline-flex;
          font-family: ${family};
          font-size: ${size}rem;
          font-weight: ${weight};
          line-height: ${lineHeight};
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        `,
        className,
      ]}
      ref={ref}
    />
  )
);
